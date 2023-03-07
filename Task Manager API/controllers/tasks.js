
const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).send({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}

const createTasks = async (req, res) => {
    try {
        const { name, completed } = req.body;
        const task = await Task.create({
            name,
            completed
        })
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getTask = async (req, res) => {

    const id = req.params.id;

    const task = await Task.findOne({ id })
    if (!task) {
        res.status(404).send({ msg: `No task with id: ${id}` });
    }
    res.send({ task })
}

const deleteTask = async (req, res) => {

    try {
        const { id: taskId } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        console.log(task);
        if (!task) {
            res.status(404).json({ msg: `no task with id : ${taskID}` })
        }
        res.status(201).send( task )
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
const updateTask = async (req, res) => {

   try {
    const {id: taskID} = req.params;
    const {data} = req.body;
    const task = await Task.findOneAndUpdate(req.params.id, req.body)
    res.status(201).json({task})
   } catch (error) {
    
   }
}
module.exports = {
    getAllTasks, createTasks, getTask, updateTask, deleteTask
}