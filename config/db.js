const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'qwerty',
    password: '@12345',
    database: 'appdev'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Database.');
});

module.exports = db;