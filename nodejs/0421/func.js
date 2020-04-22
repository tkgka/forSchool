
call1();
function call1(){
    console.log("call1 호출");
    
}

var call2 = function (){
    console.log("call2 호출");
}
call2();


var call3 = function (){
    return "hello"
}
var res = call3();

console.log(res);