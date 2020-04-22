var http=require('http');
var url=require('url');

http.createServer((req,res)=>{
    const path=url.parse(req.url,true).pathname;
    const query=url.parse(req.url,true).query;

    if(path==='/plus'){
        res.end((parseInt(query.num1)+parseInt(query.num2)).toString());
    }

}).listen(3001);