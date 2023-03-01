require('dotenv').config()

const express = require("express")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const csrf = require('csrf')

const cookieParser = require('cookie-parser')

// custom middleware
const auth = require("./middleware/auth")

//import model - User
const User = require("./model/user")

const app = express()
// if you want to inject on app level then use app.use() middleware
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("<h1> Welcome to express App</h1>")
})

app.post('/test-register', (req, res)=>{
    res.status(200).send("We are doing well");
})
app.post("/register", async (req, res) => {
    //cs
    
    try {
        // collect info from user
        const { firstname, lastname, email, password } = req.body;
        // validate if all data exists
        if (!(firstname && lastname && email && password)) {
            res.status(400).send("All fields are required")
        }

        // check if user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(400).send("User already exist in database")
        }

        // encrypt the password
        const encryptedPassword = await bcrypt.hashSync(password, 10);

        const user = User.create({
            firstname,
            lastname,
            email,
            password: encryptedPassword
        })
        // generating a token
        const token = jwt.sign({ id: User._id, email }, process.env.secret, { expiresIn: "2h" })
        user.token = token;
        user.password = undefined;

        res.status(200).send(user)



    } catch (error) {
        console.log(error)
        console.log("Error in response route");
    }

})
app.post("/login", async (req, res) => {
    try {
        // collect info from frontend 
        const { email, password } = req.body
        // validate the data
        if (!(email && password)) {
            req.status(401).send("Email and password are required ");
        }

        const user = await User.findOne({ email })

        // if user found and password match
        if (user && await bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user._id, email }, process.env.secret, { expiresIn: '2h' })
            user.password = undefined;
            user.token = token
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            res.status(200).cookie("token", token, options).json({
                success: true,
                token,
                user
            })
        }

        // create token and send
        res.status(400).send("Email or password is incorrect")
    } catch (error) {
        console.log("Error in response route");
    }

})


// dashboard
    // to implement dashboard verify the cookie and allow the user
app.get("/dashboard", auth, (req, res)=>{
    console.log(req.cookies);
    res.send("Welcome to dashboard")
})

app.get("/profile", (req, auth, getRole, res) => {
    //access to req.user = id, email

    //based on id, query to DB and get all information of user - findOne({id})

    //send a json response with all data
})



module.exports = app;