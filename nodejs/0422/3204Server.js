var http=require('http');
var url=require('url');
var qs = require('querystring');
http.createServer((req,res)=>{
    const path=url.parse(req.url,true).pathname;
    const query=url.parse(req.url,true).query;

    if(path==='/plus'){
        var num1 =parseInt(query.num1);
        var num2 = parseInt(query.num2);
        var cal = query.cal;
        if(cal == "+"){
            res.end("PLUS : "+(num1+num2).toString());
        }else if(cal == "-"){
            res.end("MINOUS : "+(num1-num2).toString());
        }else if(cal == "*"){
            res.end("MULTIFLY : "+(num1*num2).toString());
        }else if(cal == "/"){
            res.end("DIVISION : "+(num1/num2).toString());
        }
        
    }else if(path === '/grade'){

        var body = "";
        req.on('data',function(data){
            body += data;
            
        });
        //post로 값을 전송했을때 데이터를 읽어들이는 방법
            //req 변수 안에 값이 있음
        req.on('end',function(){
           var post = qs.parse(body);
           console.log(post);

        });

    }

}).listen(3001);