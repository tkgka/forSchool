var mysql = require('mysql')

var conn = mysql.createConnection({
    host:'localhost' ,
    user:'root' ,
    password:'root',
    port:'3306' ,
    database:'software'
});
// conn.connect();

module.exports = conn;
