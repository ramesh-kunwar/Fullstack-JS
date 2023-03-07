const express = require("express")
const app = express()

const tasks = require("./routes/tasks")
const PORT = 3000;

// built in middleware for json
app.use(express.json())



app.get("/", (rea, res) => {
    res.send("Welcome to express app")
})

app.use("/api/v1/tasks", tasks)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))