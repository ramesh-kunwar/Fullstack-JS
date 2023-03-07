
require("dotenv").config()
const connectDB = require("./db/connect")

const express = require("express")
const app = express()

// built in middleware for json
app.use(express.json())
app.use(express.static("./public"))

const tasks = require("./routes/tasks")
const PORT = 3000;


app.use("/api/v1/tasks", tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()



