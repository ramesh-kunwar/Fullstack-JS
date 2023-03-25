const express = require("express")
const router = express.Router();

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../model/userSchema")

router.get("/", (req, res) => {
    res.send("Hello world from server")
})

router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !work || !password || !cpassword) {
        res.json({ message: "All fields are require" })
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            res.status(422).json({ error: "Email already exists" })
        }

        const user = new User({ name, email, phone, work, password, cpassword })
        await user.save()
        res.status(201).json({ message: "User registered successfully" })
    } catch (error) {
        console.log(error);
    }
})

router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: " Please fill the data" });
        }
        const userLogin = await User.findOne({ email: email })
        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password)

            const token = await userLogin.generateAuthToken() // this method is in user model

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 2592000000),
                httpOnly: true,

            })

            if (!isMatch) {

                res.status(400).json({ error: "Invalid credientials" })
            } else {
                res.json({ message: "user signin successfully" })
            }
        }




    } catch (error) {

    }
})
module.exports = router;