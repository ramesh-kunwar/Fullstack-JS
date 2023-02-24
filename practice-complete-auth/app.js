require("dotenv").config()
require("./config/database").connect()
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("./model/user")

const app = express()
app.use(express.json)

app.get("/", (req, res) => {
    res.send("<h1> Welcome to Express App </h1>");
})

app.post("/register", async (req, res) => {
    try {
        // collect information from front end
        const { firstname, lastname, email, password } = req.body.firstname;

        // validate the data
        if (!(firstname && lastname && email && password)) {
            res.status(400).send("All fields are required")
        }

        // take care of already registered data
        const existingUser = await User.findOne({ email }) // returns a PROMISE

        if (existingUser) {
            res.status(400).send("User already exist")
        }

        // take care of password

        const myEncPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstname,
            lastname,
            email: email.toLowerCase(),
            password: myEncPassword,
        })

        // generate a token
        // as soon as you save something on db mongoose or mongodb it gives a unique object id
        const token = jwt.sign({ user_id: user._id }, process.env.SECRET_KEY, { expiresIn: "2h" }); // user._id is comming from db
        user.token = token;
        user.password = password;


        res.status(201).json(user)
    } catch (error) {
        console.log(error)
    }


})

app.post("/login", async (req, res) => {
    try {
        // collect the information
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send("Field is missing")
        }

        const user = await User.findOne({ email });

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ user_id: user._id, email }, process.env.SECRET_KEY, { expiresIn: "2h" })
            user.token = token;
            user.password = undefined;
            res.status(200).json(user)
        }

        res.status(400).send("Email or password is incorrect")


    } catch (error) {
        console.log(error);
    }

})

module.exports = app;