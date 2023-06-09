const express = require("express");
const movieSchema = require("../models/user");
const getMovieHandler= require("../handlers/getMovieHandler")

const cinema = express.Router();

// Creando usuario
cinema.get("/", getMovieHandler)


module.exports = cinema;
