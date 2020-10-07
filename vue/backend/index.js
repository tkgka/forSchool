var http = require('http')
var mysql = require('mysql2')
var Url = require('url')
var Query = require('querystring')

var dbinfo = {
    host: '127.0.0.1',
    port : '3306',
    user: 'root',
    password: '',
    database: 'lang'    
}

var init = function(){
    return mysql.createConnection(dbinfo)
}

var connect = function(conn){
    conn.connect(function(err){
        if(err) console.log("DB error")
        else console.log("DB Connected")
    })
}

var conn = init();
connect(conn)

http.createServer((req,res,next)=>{
    var url = Url.parse(req.url)
    var params = Query.parse(url.query)

    if(req.url.includes('/list')){

    }else if (req.url.includes("/update")){

    }else{
    res.writeHead(200, {'content-type': 'text/html;charset=utf-8'})
    res.write('<em>Hello World</em>');
    res.end();
    }

}).listen(8080, function(){
    console.log("8080포트에서 대기중")
});