var http = require('http')
var mysql = require('mysql2')
var Url = require('url')
var Query = require('querystring')

var dbinfo = {
    host: '127.0.0.1',
    port : '3306',
    user: 'root',
    password: 'tkgka28645',
    database: 'lang'    
}

var conn = mysql.createConnection(dbinfo)
conn.connect(function(err){
    if(err) console.log("DB error")
    else console.log("DB connected")
})



http.createServer((req,res,next)=>{
    var path = req.url
    var url = Url.parse(req.url)
    var params = Query.parse(url.query)

    

    if(path == '/list'){
        res.writeHead(200, {'content-type': 'application/json;charset=utf-8',"Access-Control-Allow-Origin":'*'})
        res.write('[{"사과":5},{"배":2},{"귤":10}]');
        res.end();
    }else if (path == '/list2'){
        
        var sql = "select * from lang";
        conn.query(sql,function(err,rows,fields){
            if(err) console.log('sql error : '+err)
            else{
            res.writeHead(200, {'content-type': 'application/json;charset=utf-8',"Access-Control-Allow-Origin":'*'})        
            res.end(JSON.stringify(rows))
            }
        })
        
    }else{
        
    res.writeHead(200, {'content-type': 'text/html;charset=utf-8',"Access-Control-Allow-Origin":'*'})
    res.write('<h3>서버 테스트</h3>');
    res.end();
    }

}).listen(8080, function(){
    console.log("8080포트에서 대기중")
});