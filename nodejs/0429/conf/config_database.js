var mysql = require('mysql2');
{
    var password = "";
}

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : password,
    database : 'software'
});

module.exports = conn;