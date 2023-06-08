const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: String,
  genre: String,
  rating: Number,
  description: String,
  // ...otras propiedades
});

module.exports = mongoose.model("Movies", moviesSchema);
