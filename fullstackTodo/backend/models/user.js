const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        maxlength: [40, "Name shoudl be under 40 characters "],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        // validate: [validator.isEmail, 'Please enter email in correct format'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        // minlength: [6, "password should be atleast 6 character"],
        select: false, // when saving to db pw doesn't come.
    },

})

userSchema.pre('save', function (next) {
    // only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) {
        return next();

    }

    this.password = bcrypt.hash(this.password, 10);
    next()

});

userSchema.methods.comparePassword = async function (usersendPassword) {

    return await bcrypt.compare(usersendPassword, this.password)

}

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60), }) // expiary is 1hr
}
module.exports = mongoose.model("User", userSchema)