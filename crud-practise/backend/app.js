require('dotenv').config()
const express = require("express")
const connectToDB = require('./config/database')
const { home, getTasks } = require('./controllers/todoController')
const app = express()
const taskRoutes = require("./routes/taskRoutes")
// middleware for json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectToDB()

app.use("/", taskRoutes)


module.exports = app;