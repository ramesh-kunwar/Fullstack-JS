
const express = require("express")

const cookieParser = require("cookie-parser")



const app = express()

// regular middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cookies and file middleware
app.use(cookieParser())

const user = require("./routes/userRoutes")




app.use("/api/users", user)
// app.use("/api/v1", product)


app.get("/signuptest", (req, res) => {
    res.render("signuptest")
})



module.exports = app;