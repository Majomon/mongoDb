const express = require("express");
const suscriptionSchema = require("../models/shooping");

const suscription = express.Router();

// Creando usuario
suscription.get("/", (req, res) => {
  /*   const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error: error.message })); */
  res.send("Estoy en suscription");
});

module.exports = suscription;
