var http=require('http');
var url=require('url');
var temp = require("./temp.js");
var qs = require('querystring');

http.createServer((req,res)=>{
    const path=url.parse(req.url,true).pathname;
    const query=url.parse(req.url,true).query;

    if(path === '/grade'){

        var body = "";
        req.on('data',function(data){
            body += data;
            
        });
        //post로 값을 전송했을때 데이터를 읽어들이는 방법
            //req 변수 안에 값이 있음
        req.on('end',function(){
           var post = qs.parse(body);
           //res.end(post.text);
           //console.log(post);
           var response = temp.grade(post.name,post.html,post.css,post.nodejs,post.android);
            res.end(response);
           
        });

    }

}).listen(3001);