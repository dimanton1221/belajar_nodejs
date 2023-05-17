const Express = require("express");
const UsersRoute = require("./routes/Users");
const logging = require("./middleware/logs");


const app = Express();



const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '11',
    database: 'express'
});


app.use(Express.json());


app.use(logging);


app.use("/users", UsersRoute);



app.use("/", (req, res) => {
    db.execute("SELECT * FROM Users", (err, result) => {

        if (err) {
            console.log(err)
        }
        else {
            res.json({
                message: "Get All User Successfully",
                data: result
            })
        }
    });


});






app.listen(40000, () => {
    console.log("BANG SERVER UP PORT 40000")
})

