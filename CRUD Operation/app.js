require("dotenv").config()
const express = require("express");
const app = express()

const userRouter = require("./routes/userRoutes")
const connectToDB = require("./config/db")
const User = require("./models/userModel")


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectToDB()

app.use("/", userRouter)
// app.post("/createuser", userRouter)
app.post("/random", (req, res) => {
  try {
    const { name, email } = req.body;
    res.status(200).send(name)
  } catch (error) {

  }
})

module.exports = app;
