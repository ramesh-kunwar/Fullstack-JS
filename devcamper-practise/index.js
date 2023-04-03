require("dotenv").config()
const express = require("express")

// connect to db
const connectDB = require("./config/db")
connectDB()
const app = express()



app.get("/",(req, res)=>{
    res.send("hello")
})


app.listen(process.env.PORT, () => console.log(`App is running at port ${process.env.PORT}`))


