const express = require("express")
const router = express.Router()
const {home, getTasks} = require("../controllers/todoController")
router.get("/", home)

router.post("/gettasks", getTasks)

module.exports = router;