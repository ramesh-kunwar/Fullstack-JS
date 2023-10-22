const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { auth } = require("../middleware/auth");

exports.getUser = async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json({
      length: user.length,
      user,
      msg: "All users",
    });
  } catch (error) {
    console.log("Error in getUser route");
    res.status(500).json({
      error,
    });
  }
};

exports.register = async (req, res) => {
  try {
    // extract all the infromation
    const { firstName, lastName, email, password } = req.body;

    // check if user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(403).json({
        msg: "User already exists",
      });
    }

    // validate the information
    if (!(firstName && lastName && email && password)) {
      res.status(401).json({
        msg: "All fields are required",
      });
    }

    // hash the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // store to db
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
    });

    // generate token
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "2h",
    });

    // save token and make pw undefined
    user.token = token;
    user.password = undefined;

    res.status(201).json({
      user,
      msg: "User registered successfully",
    });
  } catch (error) {
    console.log("Error in register route");
    res.status(500).json({
      error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        msg: "user not found",
      });
    }

    if (!(user && (await bcrypt.compare(password, user.password)))) {
      res.status(401).json({
        msg: "Invalid credentials",
      });
    }

    console.log(user);
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "2h",
    });
    // console.log(token);

    res.cookie("token", token).status(200).json({
      user,
      msg: "Login successful",
    });
  } catch (error) {
    console.log("Error in login route");
    res.status(500).json({
      error,
    });
  }
};

exports.dashboard = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      user,
      msg: "dasbhoard route",
    });
  } catch (error) {
    console.log("error in dashboard route");
    res.status(500).json({
      error,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      expires: new Date(Date.now()),
    });
    res.status(200).json({
      msg: "Logout successfully",
    });
  } catch (error) {
    console.log("Error in logout route");
    res.status(500).json({
      error,
    });
  }
};
