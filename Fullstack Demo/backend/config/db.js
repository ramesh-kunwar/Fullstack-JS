const mongoose = require("mongoose");
const DB_URL = "mongodb+srv://ramesh:ramesh@cluster0.jm6vyov.mongodb.net/demo";
const connectWithDb = () => {
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB got connected`))
    .catch((error) => {
      console.log(`DB not connected`);
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDb;
