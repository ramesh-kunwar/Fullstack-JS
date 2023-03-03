const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
        trim: true,
        maxlenght: [25, "Name must be less than 25 character long"]
    },
    email: {
        type : String,
        require: [true, "Email is required"],
        unique: true,
    }
})

module.exports = mongoose.model("user", userSchema)