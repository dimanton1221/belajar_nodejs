const mysql = require('mysql2');
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '11',
    database: process.env.DB_NAME || 'db_izzam',
});


module.exports = db.promise();