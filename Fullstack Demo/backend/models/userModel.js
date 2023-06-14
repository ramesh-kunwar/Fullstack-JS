const mongoose = require("mongoose");




const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    // unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    // select: false, // when saving to db pw doesn't come.
  },
  role: {
    type: String,
    default: "user",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
