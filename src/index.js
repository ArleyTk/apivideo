const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");

const cors = require('cors');
const bodyParser = require('body-parser')

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);

app.use( cors() );
app.use(bodyParser.json()) // for parsing application/json

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado al Mongo "))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Escuchando al puerto", port));
