const Genre = require("../models/genre");

const getGenreApi = require("../controllers/getGenreApi");

const getGenreHandler = async (req, res) => {
  try {
    const apiGenre = await getGenreApi();
    // Insertar los géneros en la base de datos
    const genreBdd= await Genre.insertMany(apiGenre.genres);

    res.status(200).json(genreBdd);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getGenreHandler;
