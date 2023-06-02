require("dotenv").config()
// require("./config/database").connect()
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("./model/user")
const {connect} = require("./config/database")

const app = express()
app.use(express.json())

connect()

// immport routes
const userRoute = require("./routes/userRoute")
// const { connect } = require("./config/database")



app.get("/", (req, res) => {
    res.send("<h1> Welcome to Express App </h1>");
})


app.use('/users', userRoute)



module.exports = app;