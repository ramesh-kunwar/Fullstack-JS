const TodoModel = require("../models/todoModel");

exports.home = (req, res) => {
    res.status(200).send("Hello express app")
}

exports.createTasks = async (req, res) => {
    try {
        const { taskName, taskStatus } = req.body;

        if (!taskName) {
            res.send("Task Name is required..")
        }
        //create a todo

        const todos = await TodoModel.create({
            taskName,
            taskStatus
        })

        res.status(200).json({
            success: true,
            message: "Task created",
            todos,
        })


    } catch (error) {
        console.log(error)
    }
}

exports.getTasks = async (req, res) =>{
    try {
        const {taskName} = req.body;
        const todos = await TodoModel.find()
        // res.status(200).send(todos)
        res.status(200).json({
            success: true,
            message: "Tasks found",
            todos
        })
    } catch (error) {
        console.log(error);
    }
}

exports.deleteTasks = async (req, res) =>{
    try {
        const id = req.params.id
        const todos = await TodoModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Task deleted",
            todos
        })
    } catch (error) {
        console.log(error)
    }
}