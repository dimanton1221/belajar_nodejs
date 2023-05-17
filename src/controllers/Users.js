
const userModel = require("../models/Users");


const getAllUser = async (req, res) => {
    try {
        const [data] = await userModel.getAllUser();
        res.json(
            {
                message: "Get All User Successfully",
                data: data
            }
        )
    } catch (error) {

        res.status(500).json(
            {
                message: "Serverr ERROOR",
                data: error
            }
        )
    }
}

const CreateUser = async (req, res) => {
    // console.log(req.body);
    const { name, email, address } = req.body;
    try {
        await userModel.createUser({ name, email, address });
        res.status(201).json(
            {
                message: "Create User Successfully",
                data: req.body
            }
        );
    } catch (error) {
        res.status(500).json(
            {
                message: "Gagal Create User",
                data: error.message
            }
        )
    }

}


const updateUser = async (req, res) => {
    const { idUser } = req.params;
    const { name, email, address } = req.body;
    try {
        await userModel.updateUser({ name, email, address }, idUser);
        res.status(200).json(
            {
                message: "Update User Successfully",
                data: req.body
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: "Gagal Update User",
                data: error.message
            }
        )
    }
}


const deleteUser = async (req, res) => {

    const { idUser } = req.params;
    try {
        await userModel.deleteUser(idUser);
        res.status(200).json(
            {
                message: "Delete User Successfully",
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: "Gagal Delete User",
                data: error.message
            }
        )
    }


}



module.exports = {
    getAllUser,
    CreateUser,
    updateUser,
    deleteUser
};