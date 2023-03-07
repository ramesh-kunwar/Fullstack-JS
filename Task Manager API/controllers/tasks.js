
const getAllTasks = (req, res) => {
    res.send("get all tasks")
}

const createTasks = (req, res) => {
    res.send(req.body)
}
const getTask = (req, res) => {
    res.send("get single task")
}
const updateTask = (req, res) => {
    res.send("update task")
}
const deleteTask = (req, res) => {
    res.send("delete task")
}

module.exports = {
    getAllTasks, createTasks, getTask, updateTask, deleteTask
}