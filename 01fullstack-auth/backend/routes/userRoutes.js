const express = require("express");
const {
  getUser,
  register,
  login,
  dashboard,
  logout,
} = require("../controller/userController");
const auth = require("../middleware/auth");

const router = express.Router();

router.route("/user").get(getUser);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout)

router.route("/dashboard").get(auth, dashboard);

module.exports = router;
