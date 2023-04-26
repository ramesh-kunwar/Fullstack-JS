const express = require("express")
require("dotenv").config()

const cookieParser = require("cookie-parser")

const connectWithDb = require("./config/db")
const app = express()


// Routes
const userRoutes = require("./routes/user")

// connect with db
connectWithDb()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to express app"
    })
})



// routes
app.use('/api/v1', userRoutes)


module.exports = app;
