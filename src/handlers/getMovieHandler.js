const mongoose = require("mongoose");
const Movie = require("../models/movies");
const Genre = require("../models/genre");
const moviesData = require("../controllers/getMovieApi");

const getMovieHandler = async (req, res) => {
  try {
    const movieApiData = await moviesData(); // Obtener los datos de películas de la API

    // Transformar los genre_ids en tipo ObjectId
    const movies = movieApiData.results.map((movie) => ({
      ...movie,
      genre_ids: movie.genre_ids.map((id) => new mongoose.Types.ObjectId(id)),
    }));

    // Insertar los documentos en la base de datos
    await Movie.insertMany(movies);

    // Obtener los géneros relacionados con las películas
    const genreIds = movies.flatMap((movie) => movie.genre_ids);
    const genres = await Genre.find({ _id: { $in: genreIds } });

    // Actualizar las referencias de géneros en las películas
    for (const movie of movies) {
      const genreObjects = genres.filter((genre) =>
        movie.genre_ids.includes(genre._id)
      );
      const genreIds = genreObjects.map((genre) => genre._id);
      await Movie.findByIdAndUpdate(movie._id, { genre_ids: genreIds });
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getMovieHandler;
