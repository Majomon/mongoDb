const axios = require("axios");

const getMovieApi = async () => {
  try {
    const movieApi = (
      await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3b631b0a18599ad865e9044ad200434e"
      )
    ).data;

    return movieApi;
  } catch (error) {
    throw new Error("Error al pedir movies");
  }
};

module.exports = getMovieApi;
