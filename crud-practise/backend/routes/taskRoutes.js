const express = require("express")
const router = express.Router()
const {home, getTasks, createTasks, deleteTasks, editTasks} = require("../controllers/todoController")
router.get("/", home)

router.post("/createtasks", createTasks)
router.get("/gettasks", getTasks)
router.delete("/deletetasks/:id", deleteTasks)
router.delete("/edittasks/:id", editTasks)

module.exports = router;