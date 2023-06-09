const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/routerUser");
const cineRoutes = require("./routes/routerMovies");
const shoopingRoutes = require("./routes/routerShooping");
const routerSuscription= require("./routes/routerSuscription")
const routerGenre= require("./routes/routerGenre")

const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json());

// Ruutes
app.use("/", userRoutes);

app.use("/cineGo", cineRoutes);
app.use("/shooping", shoopingRoutes);
app.use("/suscription", routerSuscription);
app.use("/genre",routerGenre)


// Conección MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connect to MongoDB Atlas"))
  .catch((error) => console.log(error));

app.listen(9000, () => console.log(`Server listening on port ${port}`));
