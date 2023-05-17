// req express
// const express = require("express");
const userModel = require("../models/Users");


const getAllUser = async (req, res) => {
    const [data] = await userModel.getAllUser();
    res.json(
        {
            message: "Get All User Successfully",
            data: data
        }
    )
}

const CreateUser = (req, res) => {
    res.json(
        {
            message: "Create User Successfully",
            data: req.body
        }
    )
}


const updateUser = (req, res) => {
    // console.log(req.params.idUser);  
    res.json(
        {
            message: "Update User Successfully",
            data: req.body
        }
    )
}


const deleteUser = (req, res) => {
    const { idUser } = req.params;
    res.json(
        {
            message: "Delete User Successfully",
            data: {
                name: "izzam",
                "id": idUser,
            }
        }
    )

}



module.exports = {
    getAllUser,
    CreateUser,
    updateUser,
    deleteUser
};