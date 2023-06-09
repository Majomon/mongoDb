const express = require("express");
const getMovieHandler = require("../handlers/getMovieHandler");
const getMovieId = require("../handlers/getMovieHandlerId");


const cinema = express.Router();

// Creando usuario
cinema.get("/", getMovieHandler);
cinema.get("/:id", getMovieId);

module.exports = cinema;
