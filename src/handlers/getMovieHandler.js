const Movie = require("../models/movies");
const Genre = require("../models/genre");
const moviesData = require("../controllers/getMovieApi");

const getMovieHandler = async (req, res) => {
  try {
    const movieApiData = await moviesData(); // Obtener los datos de películas de la API
    const movies = movieApiData.results; // Acceder a la propiedad "results" que contiene los datos de las películas

    // Obtener todos los géneros del modelo Genre
    const genres = await Genre.find();

    // Crear un mapa de géneros para facilitar la búsqueda por ID
    const genreMap = new Map();
    genres.forEach((genre) => {
      genreMap.set(genre.id, genre.name);
    });

    // Reemplazar los IDs de género por los nombres correspondientes en cada película
    movies.forEach((movie) => {
      movie.genre_ids = movie.genre_ids.map((genreId) => {
        const genreName = genreMap.get(genreId);
        return genreName ? genreName : genreId;
      });
    });

    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getMovieHandler;
