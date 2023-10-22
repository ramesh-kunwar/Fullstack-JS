require("dotenv").config();

const express = require("express");
const connectDB = require("./db/connectDB");
const cookieParser = require("cookie-parser");
const app = express();

const userRoutes = require("./routes/userRoutes");

// connect to db
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ msg: "Basic get route" });
});

app.use("/api/v1", userRoutes);

module.exports = app;
