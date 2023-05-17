// req express
// const express = require("express");

const getAllUser = (req, res) => {
    const data =
    {
        id: 1,
        name: "izzam",
        username: "macoding777"
    };
    res.json(
        {
            message: "Get All User Successfully",
            username: data
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
                name:"izzam",
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