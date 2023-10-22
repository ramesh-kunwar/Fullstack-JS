const mongoose = require("mongoose");

// Define a function to connect to the MongoDB database
async function connectDB() {
  try {
    // MongoDB connection string
    // const dbUrl = 'mongodb://localhost:27017/your_database_name'; // Replace with your MongoDB connection string and database name

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,


    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = connectDB;
