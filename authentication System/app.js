const express = require("express")

const User = require("./model/User")
const auth = require("./middleware/auth")

const { connect } = require("./config/database")

require("dotenv").config()

// packages import
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser())

// connect to db
connect()


app.get("/", (req, res) => {
    res.json({
        message: "home route"
    })
})

//
app.post("/register", async (req, res) => {
    try {
        // destructuring
        const { firstname, lastname, email, password } = req.body;

        // validation
        if (!firstname || !lastname || !email || !password) {
            res.status(400).json({
                error: "All fields are required"
            })
        }

        // search for user
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(401).json({
                error: "User already exists"
            })
        }

        // encrypt the password
        const myEncPassword = await bcrypt.hash(password, 10)

        // create a user
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: myEncPassword
        })


        // token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.SECRET_KEY,
            { expiresIn: "2h" }

        )

        user.token = token

        //
        res.status(201).json(user)


    } catch (error) {
        console.log(error);
    }

})

app.post("/login", async (req, res) => {
    try {
        // destructuring
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            res.status(400).json({
                error: "All fields are required"
            })
        }

        // search for user
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({
                error: "User not found"
            })
        }

        // if user exists and pw matches then send token
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ user_id: user._id, email }, process.env.SECRET_KEY, { expiresIn: "2h" })
            user.token = token
            user.password = undefined

            // if you want to use cookies
            // cookei options
            const options = {
                expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true, // read only by backend server not by frontend
            }


            //
            res.status(200).cookie('token', token, options).json({
                success: true,
                token,
                user
            })
        }


        res.send("User not found or password doesn't match")


    } catch (error) {
        console.log(error);
    }

})

app.get("/dashboard", auth, (req, res) => {

    res.json({
        message: "Welcome to secret information",
        data: req.user
    })
})


module.exports = app;