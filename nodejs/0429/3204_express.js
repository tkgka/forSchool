var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');
var app = express();

var port = 3000;
//db연결
var conn = require('./config_database.js');

var func = require('./func_databse.js');

var ejs = require('ejs');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret : "root",            // session 암호키 값
    resave : false,            // session 만들때 마다 다른 id 부여할 것인지
    saveUninitialized : true  //session 사용할 때 만 id값을 부여할 것인지
    }));


app.set("view engine","ejs");

app.post('/Join',function(req, res){
   func.join(req,res);
});

// app.post('/delete',function(request, response){
//     func.delete(request,response);  
// });
app.get('/delete',function(request, response){
        func.delete(request,response);  
    });
app.post('/update',function(request, response){ 
    func.update(request,response);
});

app.post('/oneSelect',function(request, response){
    console.log(request.body.id);
    func.oneselect(request,response);
});


app.get('/allSelect',function(request, response){
    console.log("현재 session의 user 이름"+request.session.user.name);
    func.allselect(request,response,);
});

app.post('/login',function(request, response){
    func.login(request,response);
      
});






app.get('/',function(req,res){
    req.session.user = {
        "name" : "jason",
        "age" : "20"
    };
    console.log("session 저장 완료");

    res.render('review',{
        num : 5
    })
    
});
app.set("view engine","ejs");
app.post('/td',function(request,res){
    var size = request.body.size;
    res.render('index',{    
      num : size
    })



});
app.get('/page',function(req,res){
  //res.send(`page : ${req.query.pageNO}`);
//querystrimg 방식
res.send(`Date: ${req.query.targetDt} <br> board ${req.query.pageNO} page`);
});

app.get('/sitemove',function(req,res){

    site = req.query.site;

    if(site == "google"){
        res.redirect("https://google.com");
    }else if(site == "naver"){
        res.redirect("http://naver.com");
    }else if(site == "daum"){
        res.redirect("http://daum.net");
    }

    
});

app.get('/admin/:id/:dt',function(req,res){
    //semantic URL 방식
    res.send(`Date:${req.params.id} <br> board:${req.params.dt}`);
});

app.get('/numbersum',function(req,res){
    var sum=0;
    st = req.query.st;
    end = req.query.end;
    for(var i =parseInt(req.query.st);i<=parseInt(req.query.end);i++){
        sum +=i;

    }
res.send(`<h1>${st}~${end}</h1>${sum}`);
   
});


app.get('/mail',function(request, response){
    response.render("mail",{

    })
});


app.listen(port,function(){
    
})


console.log(port+"번 서버에서 대기중");    
