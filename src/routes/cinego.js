const express = require("express");
const userSchema = require("../models/user");

const cinema = express.Router();

// Creando usuario
cinema.get("/", (req, res) => {
  /*   const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error: error.message })); */
  res.send("Estoy en cinema");
});

module.exports = cinema;
