const mongoose = require("mongoose")
const Course = require("../models/courses")
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
    // courses: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Course',

    // },
    createdAt: {
        type: Date,
        createdAt: Date.now
    }
},
 {
    toJSON: { virtuals: true }, // Enable virtuals for JSON output
    toObject: { virtuals: true }, // Enable virtuals for object output
}
)

// reverse populate
bootcampSchema.virtual("courses", {

    ref: "Course",
    localField: "_id",
    foreignField: "bootcamp",
    justOne: false
})
module.exports = mongoose.model("Bootcamp", bootcampSchema)