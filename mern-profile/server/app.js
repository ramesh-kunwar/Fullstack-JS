require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const app = express()
const connectToDB = require("./config/db")
connectToDB()

// middleware
const middleware = (req, res, next) =>{
    console.log("hello my middleware");

    next()
}

// app.use(middleware())
// middleware()


app.get("/", (req, res)=>{
    res.send("Welcome to express app");
})
app.get("/about", middleware, (req, res)=>{
    res.send("Welcome to about app");
})
app.get("/contact", (req, res)=>{
    res.send("Welcome to contact app");
})
app.get("/signin", (req, res)=>{
    res.send("Welcome to signin app");
})
app.get("/signup", (req, res)=>{
    res.send("Welcome to signup app");
})

app.listen(4000, ()=> console.log("App running"))