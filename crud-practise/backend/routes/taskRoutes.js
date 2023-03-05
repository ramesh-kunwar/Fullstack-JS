const express = require("express")
const router = express.Router()
const {home, getTasks, createTasks, deleteTasks} = require("../controllers/todoController")
router.get("/", home)

router.post("/createtasks", createTasks)
router.get("/gettasks", getTasks)
router.delete("/deletetasks/:id", deleteTasks)

module.exports = router;