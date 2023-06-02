const express = require("express")
const { getAllUser, createUser } = require("../controllers/userController")

const router = express.Router()

router.route("/").get(getAllUser)
router.route("/").post(createUser)


module.exports = router