const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Course title is required"]
    },
    description: {
        type: String,
    },
    bootcamp: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bootcamp',

    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Course", courseSchema)