require('dotenv').config()
const Express = require("express");
const UsersRoute = require("./routes/Users");
const logging = require("./middleware/logs");

const PORT = process.env.PORT || 4000;
const app = Express();



// middleware
app.use(Express.json());
app.use(logging);
app.use("/users", UsersRoute);







app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
})

