const User = require("../models/user")
const BigPromise = require("../middleware/BigPromise")
const CustomError = require("../utils/CustomError")
const cookieToken = require("../utils/cookieToken")


// Signup
exports.signup = BigPromise(async (req, res, next) => {

    const { name, email, password } = req.body;


    if (!name || !email || !password) {
        return next(new CustomError("All fields are required", 204))
    }

    // existing user
    const existingUser = await User.findOne({ email })

    if (existingUser) {
        return (next(new CustomError("User already exits", 400)))
    }

    const user = await User.create({
        name,
        email,
        password
    })

    // send information via cookie

    cookieToken(user, res)

})


// Signin
exports.signin = BigPromise(async (req, res, next) => {

    // get email and password
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new CustomError("Please provide email and password", 400))
    }

    // find user by email
    const user = await User.findOne({ email }).select("+password")
    if (!user) {
        res.status(400).json({
            message: "No user found in db"
        })
    }


    // check password
    const isValidPassword = user.comparePassword(password);
    if (!isValidPassword) {
        return next(new CustomError("Email or Password is incorrect", 400))
    }

    // send cookie 
    cookieToken(user, res)

})

// signout
exports.signout = BigPromise(async (req, res, next) => {

    // clear cookie
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Signout successful"
    })

})

// get all user
exports.getAllUser = BigPromise(async (req, res, next) => {

    const users = await User.find();

    if (!users) {
        return next(new CustomError("No user found", 400))
    }

    res.status(200).json({
        success: true,
        users
    })
})


// get single User
exports.getSingleUser = BigPromise(async (req, res, next) => {

    const user = await User.findById(req.params.id)

    if (!user) {
        return next(new CustomError("No user found", 400))
    }

    res.status(200).json({
        success: true,
        user
    })

})