var http = require('http');
// 로컬IP : 127.0.0.1 / localhost
var fs = require('fs');
// 파일 처리와 관련된 모듈
var url = require('url');
// 쿼리스트링을 분석 / 분리하여 문자열로 변환하는 모듈
var temp = require("./temp.js");

http.createServer(function(req,res) {

    var path = url.parse(req.url,true).pathname;
    var query = url.parse(req.url,true).query;
        console.log(path);//파일명
        console.log(query.id);//쿼리스트링데이터
     if(path == "/html"){


        var response = temp.template("HTML",query.id);

            res.end(response);

        
    }else if(path == "/nodejs"){
        var response = temp.template("NodeJs",query.id);

            res.end(response);
        

    }else if(path == "/query"){
        var response = temp.template("Query",query.id,query.id2);

            res.end(response);
        
    }else if(path == "/table"){
        
        var print = "";
        for(var i=1;i<=query.id;i++){
            print += "<th>"+i+"</th>";
        }
        res.end("<table border=1><tr>"+print+"</tr></table>");
        
    
    }else {
            res.end("PageNotFound");
    }
    
    
    
}).listen(3000);