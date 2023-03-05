const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        max: 50,
    },
    taskStatus: {
        type: Boolean,
    }
})

module.exports = mongoose.model("todoSchema", todoSchema)