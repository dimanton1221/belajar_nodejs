const Express = require("express");
const UsersRoute = require("./routes/Users");
const logging = require("./middleware/logs");


const app = Express();



const mysql = require('mysql2');

// create the connection to database


app.use(Express.json());


app.use(logging);


app.use("/users", UsersRoute);







app.listen(40000, () => {
    console.log("BANG SERVER UP PORT 40000")
})

