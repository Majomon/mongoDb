const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json());
app.use("/", userRoutes);

//Rutas
app.get("/", (req, res) => {
  res.send("Hola");
});

// Conección MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connect to MongoDB Atlas"))
  .catch((error) => console.log(error));

app.listen(9000, () => console.log(`Server listening on port ${port}`));
