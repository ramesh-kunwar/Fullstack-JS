const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      res.status(404).json({
        msg: "Token is missing",
      });
    }

    const decode = jwt.verify(token, process.env.SECRET);

    req.user = decode;
    next();
  } catch (error) {
    console.log("error in auth");
    res.status(500).json({
      error,
    });
  }
};

module.exports = auth;
