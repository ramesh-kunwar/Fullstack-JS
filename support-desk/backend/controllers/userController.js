const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/userModel");

// @descriptioin Register a new user
// @route /api/users
// @access public

exports.registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        // 400 is a client error
        res.status(400);
        throw new Error("Please include all fields");
    }

    // Find if user already exists

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (!user) {
        res.status(400);
        throw new Error("Invalid user Data");
    }

    res.status(201).json({
        _id: user.i_id,
        message: "User registered",
        user: user,
        token: generateToken(user._id),
    });
});

// @descriptioin Login a  user
// @route /api/users/login
// @access public
exports.loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        res.status(401);
        throw new Error("Invalid credentials");
    }

    // check user and password match
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            message: "User Loggedin",
            user: user,
            token: generateToken(user._id),
        });
    }
});


// @descriptioin Get current user
// @route /api/users/me
// @access private
exports.getMe = asyncHandler(async (req, res) => {
    res.send("me")
});



const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};
