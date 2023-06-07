const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// Creando usuario
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error: error.message }));
});

// Todos los usuarios
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error: error.message }));
});

// Un usuario
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ error: error.message }));
});

module.exports = router;
