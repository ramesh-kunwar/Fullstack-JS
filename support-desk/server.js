const express = require("express")
require("dotenv").config()
const PORT = process.env.PORT || 8000;
const userRoutes = require("./backend/routes/userRoutes")

const app = express()


app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the support desk api"
    })
})

app.use("/api/users", userRoutes)




app.listen(PORT, () => console.log(`App is running at port ${PORT}`))