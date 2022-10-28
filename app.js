require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Setup your Middleware and API Router here
app.use("/api", require("./api"));

module.exports = app;
