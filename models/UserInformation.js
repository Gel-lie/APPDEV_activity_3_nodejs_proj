const db = require('../config/db.js');
const md = {
    save:(data, callback) =>{
        const q = "insert into info (firstname, lastname, email, gender) values (?,?,?,?)";
        db.query(q, [data.firstname, data.lastname, data.email, data.gender], callback);
    },
    update:(id, data, callback) =>{
        const query ="UPDATE info SET firstname=?, lastname=?, email=?, gender=? WHERE id=?";
        db.query(query, [data.firstname, data.lastname, data.email, data.gender, id], callback);
    },
    getInformation:(id, callback) =>{
        const query ="select * from info where id=?";
        db.query(query,[id], callback);
    },
    getAllInformation:(callback) =>{
        const query = "select * from info";
        db.query(query, callback);
    },
    delete:(id, callback) =>{
        const q = "delete from info where id=?";
        db.query(q, [id], callback);
    }
};
module.exports = md;