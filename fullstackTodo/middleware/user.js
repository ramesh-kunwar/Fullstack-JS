const BigPromise = require("./BigPromise")
const User = require("../models/user");
const CustomError = require("../utils/CustomError")
const jwt = require("jsonwebtoken")

exports.isLoggedIn = BigPromise(async (req, res, next) => {
    const token = req.cookies.token || req.header("Authorization").replace("Bearer ", "")

    if (!token) {
        return next(new CustomError("Login first to access this page", 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decoded.id)

    next()

})


exports.isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return next(new CustomError("You are not allowed for this resource", 403))

    }
    next()
}

// exports.customRole = (...roles) => {
//     console.log(roles);
//     return (req, res, next) => {
//         if (!roles.includes(req.user.role)) {
//             return next(new CustomError("You are not allowed for this resource", 403))
//         }

//         next()
//     }
// }