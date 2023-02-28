
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    console.log(req.cookies);
    // const token = req.cookies.token || req.body // if you don't find on req.cookies then search in req.body
    const token = req.cookies.token;

    // const token = req.header() // if request is coming from mobile app
    // what if token is not there
    if (!token) {
        res.status(403).send("Token is missing")
    }

    // verify token
    try {
        const decode = jwt.verify(token, "ramesh")
        console.log(decode);
        req.user = decode // i am creating req.user
    } catch (error) {
        res.status(403).send("Token is invalid")

    }
    next()
}

module.exports = auth;