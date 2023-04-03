const mongoose = require("mongoose")

const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Bootcamp name is required"]
    },
    email: {
        type: String,
        unique: [true, "Email must be unique"]
    },
    contact: Number,
    duration: String,
    createdAt: {
        type: Date,
        createdAt: Date.now
    }
})

module.exports = mongoose.model("Bootcamp", bootcampSchema)