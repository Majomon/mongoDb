const express = require("express");

const shooping = express.Router();

// Creando usuario
shooping.get("/", (req, res) => {
  res.send("Estoy en shooping");
});

module.exports = shooping;
