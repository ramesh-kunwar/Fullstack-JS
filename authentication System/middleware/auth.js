const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {

    const token =
        req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "")
    if (!token) {
        return res.status(403).send("Token is missing")
    }

    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decode;

    } catch (error) {
        console.log(error);
        return res.status(401).send("Invalid Token")
    }

    next()
}

module.exports = auth;