var express = require('express');
var app = express();

var port = 3000;

app.get('/',function(req,res){
    res.send('index');
});

app.listen(port,function(){
    
})
console.log(port+"번 서버에서 대기중");