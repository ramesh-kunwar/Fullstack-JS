const app = require("./app");
const connectWithDb = require("./config/db");

// connect with database
connectWithDb();



app.listen(4000, () => console.log(`App is running at port 4000`))
