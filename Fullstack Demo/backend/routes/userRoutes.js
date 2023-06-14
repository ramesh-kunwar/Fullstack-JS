const express = require("express");
const { signup, getAllUsers } = require("../controllers/userController");
// const { signup } = require("../controller/userController");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/").get(getAllUsers);

module.exports = router;
