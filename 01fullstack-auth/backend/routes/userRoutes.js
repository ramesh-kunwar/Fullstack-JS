const express = require("express");
const { getUser } = require("../controller/userController");

const router = express.Router();

router.route("/user").get(getUser);

module.exports = router;
