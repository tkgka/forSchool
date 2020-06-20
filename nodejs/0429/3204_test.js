var http = require('http');
var url = require('url');
var port = 3000;
http.createServer(function(req,res){
    path = url.parse(req.url, true).pathname;
    query = url.parse(req.url,true).query;

    if(page === '/page'){
        page = query.pageNO;
        console.log(page);
    }

    console.log(path);

}).listen(port);
console.log(port+"번 포트에서 대기중");