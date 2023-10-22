require("dotenv").config();

const express = require("express");
const connectDB = require("./db/connectDB");
const app = express();

const userRoutes = require("./routes/userRoutes");

// connect to db
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Basic get route" });
});

app.use("/api/v1", userRoutes);

module.exports = app;
