const express = require("express")
require("dotenv").config()
const { errorHandler } = require("./backend/middleware/errorMiddleware")
const PORT = process.env.PORT || 8000;
const userRoutes = require("./backend/routes/userRoutes");
const connectDB = require("./backend/config/db");


// connecting to db
connectDB()
const app = express()



app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the support desk api"
    })
})

app.use("/api/users", userRoutes)


app.use(errorHandler)



app.listen(PORT, () => console.log(`App is running at port ${PORT}`))