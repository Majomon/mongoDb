const express = require("express");
const shoopingSchema = require("../models/shooping");

const shooping = express.Router();

// Creando usuario
shooping.get("/", (req, res) => {
  res.send("Estoy en shooping");
});

module.exports = shooping;
