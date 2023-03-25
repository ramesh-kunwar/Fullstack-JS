require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const app = express()
const connectToDB = require("./config/db")
connectToDB()

const User = require("./model/userSchema")

//middleware
app.use(express.json())

app.use(require("./router/auth"))



app.listen(4000, ()=> console.log("App running"))