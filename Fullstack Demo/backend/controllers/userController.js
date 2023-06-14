const User = require("../models/userModel");
const CustomError = require("../utils/customError");
const asyncHandler = require("express-async-handler");

exports.signup = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return next(new CustomError("Name, email and password are required", 400));
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(200).json({
    success: true,
    count: user.length,
    data: user,
  });
});

exports.getAllUsers = asyncHandler(async (req, res, next)=>{
    const users = await User.find()

    res.status(200).json({
        success: true,
        data: users,
    })
})

// exports.login = BigPromise(async (req, res, next) => {
//     const { email, password } = req.body;

//     // check for presence of email and password
//     if (!email || !password) {
//         return next(new CustomError("Please provide email and password", 400))
//     }

//     const user = await User.findOne({ email }).select("+password"); // by default password is false in model so we have to make it true using +
//     // check user
//     if (!user) {
//         return next(new CustomError("Email or password doesn't match or exist", 400))
//     }

//     const isPasswordCorrect = await user.isValidatedPassword(password);

//     // if user doesn't match
//     if (!isPasswordCorrect) {
//         return next(new CustomError("Email or password doesn't match or exist", 400))
//     }

//     // generate and send token
//     const token = user.getJwtToken()

//     const options = {
//         expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
//         httpOnly: true,
//     }
//     user.password = undefined

//     return res.status(200).cookie('token', token, options)
//         .json({
//             success: true,
//             data: user,
//             token
//         }) // cookie may not be stored on mobile so for precaution send json

// })

// exports.logout = BigPromise(async (req, res, next) => {

//     res.cookie("token", null, {
//         expires: new Date(Date.now()),
//         httpOnly: true,
//     })

//     res.status(200).json({
//         success: true,
//         message: "Logout success"
//     })

// })
