const asyncHandler = require("express-async-handler")
// @descriptioin Register a new user
// @route /api/users 
// @access public

exports.registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        // 400 is a client error
        res.status(400)
        throw new Error("Please include all fields")
    }
    res.status(200).json({
        message: req.body
    })
})

// @descriptioin Login a  user
// @route /api/users/login
// @access public
exports.loginUser = asyncHandler(async(req, res) => {
    res.send("Login Route")
})
