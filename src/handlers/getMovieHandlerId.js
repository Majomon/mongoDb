const Genre = require("../models/genre");
const Movie = require("../models/movies");

const getGenreApi = require("../controllers/getGenreApi");

const getGenreHandler = async (req, res) => {
  const { id } = req.params;
  try {
    // Si lo hago de este modo en lugar de buscar por id va a buscar por _id
    /*   const movie = await Movie.findById(mongoose.Types.ObjectId(id)); */
    const movie = await Movie.findOne({ id: id });

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getGenreHandler;
