var conn = require('./config_database.js');

exports.join = function(req,res){

    var id = req.body.id;
    var pw = req.body.pw;
    var nick = req.body.nick;

    //res.send(id+pw+nick);
    

    var sql = `insert into member1 values(?,?,?)`

   conn.query(sql,[id,pw,nick], function(err,rows){
       if(!err){
           console.log('입력성공');
       }else{
           console.log('error 그자체');
       }



   })
    res.send("DB연결");

}
exports.delete = function(request,response){
    //var id = request.body.id;
    
    var id = request.query.id;

    var sql = "delete from member1 where id = ?"
    console.log(id)

    conn.query(sql, [id], function(err, rows){
        if(!err) {
            console.log("삭제성공!")
            response.redirect("http://localhost:3000/allSelect")
        } else {
            console.log("삭제실패!"+err);
        }
    }); // DB에 쿼리를 전송
 
 
}

exports.update = function(request,response){
    var id = request.body.id;
    var pw = request.body.pw;

   

  

    var sql = "update member1 set pw = ? where id = ?"


    conn.query(sql, [pw,id], function(err, rows){
        if(!err) {
            console.log("갱신성공!")
        } else {
            console.log("갱신실패!"+err);
        }
    }); // DB에 쿼리를 전송

    

    response.send("DB 연결 성공!");
}


exports.oneselect = function(request,response){
    var id = request.body.id;

   

 

    var sql = "select * from member1 where id = ?"


    conn.query(sql, [id], function(err, rows){
        if(!err) {
            response.send(`id: (${rows[0].id})  pw: (${rows[0].pw})  NickName: (${rows[0].nickname})`);
        } else {
            response.send("검색실패!"+err);
        }
    }); // DB에 쿼리를 전송
}


exports.allselect = function(request,response){
    var sql = "select * from member1"


    conn.query(sql, function(err, rows){
        if(!err) {
          

            response.render('AllSelect',{
                rows : rows,
                user : request.session.user
            });
        } else {
            response.send("검색실패!"+err);
        }
    }); // DB에 쿼리를 전송

}


exports.login = function(request,response){
    var id = request.body.id;
    var pw = request.body.pw;
   
    var sql = "select * from member1 where id=? && pw = ?"

    conn.query(sql, [id,pw], function(err, rows){
        if(rows[0]) {
            //response.send(`로그인 성공 ! NickName: (${rows[0].nickname})`);

            //response.redirect("http://127.0.0.1:5500/0429/logins.html")
            response.render('logins',{ 
                id : id
            })
            
        } else {
           // response.send("로그인 실패");
            response.redirect("http://127.0.0.1:5500/0429/loginf.html")         
        }
    });
}
