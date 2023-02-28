const express = require("express")
const app = express()

let ejs = require('ejs');


app.get("/", (req, res) => {
    res.send("<h1> Hello from EJS </h1>")
})

// middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// View Engine Middleware
app.set("view engine", "ejs")

app.get("/myget", (req, res) => {
    console.log(" query " + req.query);
    console.log(" body " + req.body);
    console.log("files " + req.files);
    res.send(req.query)
})

app.post("/mypost", (req, res)=>{
    res.send(req.query)
    console.log(req.query);
})

// rendering the page
app.get("/getform", (req, res) => {
    res.render("getform")
})
app.get("/postform", (req, res)=>{
    res.render("postform")
})

app.listen(4000, () => {
    console.log("Server is running at port 4000");
})

