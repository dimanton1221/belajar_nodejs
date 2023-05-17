const db = require('../config/database');


const getAllUser = () => {
    const SQL = "SELECT * FROM Users";

    return db.execute(SQL);
}

module.exports = {
    getAllUser
}