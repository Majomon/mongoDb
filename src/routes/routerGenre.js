const express = require("express");
const getGenreApi= require("../handlers/getGenreHandler")
const genre = express.Router();

// Creando usuario
genre.get("/", getGenreApi)


module.exports = genre;
