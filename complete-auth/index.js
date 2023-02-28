// require("./config/database").connect()
const app = require("./app")
const {PORT}= process.env;


app.listen(PORT, ()=>{
    console.log(`PPORT is listening at ${PORT}`);
})
