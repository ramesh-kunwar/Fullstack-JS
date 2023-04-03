const Bootcamp = require("../models/bootcamps")


// create bootcamps
exports.createBootcamp = async (req, res) => {
    const { name, email, contact, duration } = req.body;
    try {

        const bootcamp = await Bootcamp.create({
            name, email, contact, duration
        })

        res.json({
            success: true,
            data: bootcamp
        })


    } catch (error) {
        console.log(error);
    }
}

// get all bootcamps
exports.displayBootcamps = async (req, res) => {
    try {
        const bootcamp = await Bootcamp.find()
        if (!bootcamp) {
            res.status(404).json({
                error: "Bootcamp not found"
            })
        }

        res.json({
            success: true,
            count: bootcamp.length,
            data: bootcamp
        })
    } catch (error) {
        res.status(404).json({
            error: "Bootcamp not found"
        })
    }
}

// update bootcamp
exports.updateBootcamp = async (req, res) => {

    const { name, email, duration, contact } = req.body;
    try {
        const id = await Bootcamp.findById(req.params.bootcampId)

        const bootcamp = await Bootcamp.findByIdAndUpdate(
            id,
            { name, email, duration, contact },
            { new: true, })

        res.status(201).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        console.log(error);
    }
}


// delete bootcamp
exports.deleteBootcamp = async (req, res) => {

    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.bootcampId)

        res.status(201).json({
            success: true,
            data: bootcamp
        })

    } catch (error) {

    }

}