const getGenreApi = require("../controllers/getGenreApi");

const getGenreHandler = async (req, res) => {
  try {
    const apiGenre = await getGenreApi();
    res.status(200).json(apiGenre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getGenreHandler;
