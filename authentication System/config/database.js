const mongoose = require("mongoose")

exports.connect = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(
        console.log(`DB CONNECTED SUCCESSFULLY`)
    )
        .catch(error => {
            console.log(`DB connection failed`);
            console.log(error);
            process.exit(1)
        })
}