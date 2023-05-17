const db = require('../config/database');


const getAllUser = () => {
    const SQL = "SELECT * FROM Users";

    return db.execute(SQL);
}

const createUser = (data) => {
    const { name, email, address } = data;
    const SQL = "INSERT INTO Users (name, email, address) VALUES (?, ?, ?)";
    return db.execute(SQL, [name, email, address]);

}

const updateUser = (data, idUser) => {
    const { name, email, address } = data;
    const SQL = "UPDATE Users SET name = ?, email = ?, address = ? WHERE id = ?";
    return db.execute(SQL, [name, email, address, idUser]);
}


const deleteUser = (idUser) => {
    const SQL = "DELETE FROM Users WHERE id = ?";
    return db.execute(SQL, [idUser]);
}

module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser
}