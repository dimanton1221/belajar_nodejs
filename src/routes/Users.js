const express = require("express");
const UserControllers = require("../controllers/Users.js");



const ruter = express.Router();

// Create a new user
ruter.post("/", UserControllers.CreateUser);

// read
ruter.get("/", UserControllers.getAllUser);

// UPDATE PATCH
ruter.patch("/:idUser", UserControllers.updateUser);

// DELETE
ruter.delete("/:idUser", UserControllers.deleteUser);


module.exports = ruter;