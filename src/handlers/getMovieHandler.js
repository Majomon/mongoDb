const getApiMovie = require("../controllers/getMovieApi");

const getMovieHandler = async (req, res) => {
  try {
    const apiMovie = await getApiMovie();
    res.status(200).json(apiMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getMovieHandler;
