const Course = require("../models/courses")
const Bootcamp = require("../models/bootcamps")

exports.getAllCourses = async (req, res) => {
    try {
        const course = await Course.find().populate("bootcamp")
        return res.status(200).json({ success: true, data: course })
    } catch (error) {

    }
}

exports.getBootcampCourse = async (req, res) => {
    try {
        const course = await Course.find({ bootcamp: req.params.bootcampId }).populate("bootcamp")


        return res.status(200).json({ success: true, data: course })
    } catch (error) {
        console.log(error);
    }
}


// add course for a specific bootcamp
exports.addCourse = async (req, res) => {

    try {
        const { title, description } = req.body

        const course = await Course.create({
            title,
            description,
            bootcamp: req.params.bootcampId
        })
        await course.populate("bootcamp")

        return res.status(200).json({
            success: true,
            data: course
        })
        console.log(course);
    } catch (error) {
        console.log(error);
    }

}