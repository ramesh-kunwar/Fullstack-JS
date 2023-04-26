const mongoose = require("mongoose")

const connectWithDb = () =>{
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true, //make this true
    autoIndex: true, //make this also true
})
.then(console.log(`DB got connected`))
.catch(error => {
    console.log(`DB not connected`);
    console.log(error);
    process.exit(1)
})
}

module.exports = connectWithDb