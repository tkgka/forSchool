
exports.grade = function(name,html,css,nodejs,android){
    avg =(Number(html)+Number(css)+Number(nodejs)+Number(android))/4;
    var answer =  `<html>
    <head><meta charset='utf-8'></head><body>
    <br> NAME : ${name}
    <br> HTML : ${html}
    <br> CSS : ${css}
    <br> NODEJS : ${nodejs}
    <br> android : ${android}
    <br> AVG : ${avg}
    <br>  
    </body></html>`;

    if(avg/4 >=95){
        return answer+"GRADE : A+";
    }else if(avg >= 90){
        return answer+"GRADE : A";
    }else if(avg >= 85){
        return answer+"GRADE : B+";
    }else if(avg >= 80){
        return answer+"GRADE : B";
    }else if(avg >= 75){
        return answer+"GRADE : C";
    }else if(avg < 75){
        return answer+"GRADE : F";
    }

}