const axios = require("axios");

const getGenreApi = async () => {
  try {
    const genreApi = (
      await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=3b631b0a18599ad865e9044ad200434e"
      )
    ).data;

    return genreApi;
  } catch (error) {
    throw new Error("Error al pedir movies");
  }
};

module.exports = getGenreApi;
