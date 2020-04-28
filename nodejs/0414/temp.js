exports.template = function(page, query,query2){
    return `<html>
    <head><meta charset='utf-8'></head><body>
    <font size ='7' color ='red'>${page} Page! </font>
    <br>사용자가 보낸 QueryString: ${query}
    <br>사용자가 보낸 QueryString2:${query2}
    </body></html>`;
}
exports.table = function(length){
    var print = "";
        for(var i=1;i<=length;i++){
            print += "<th>"+i+"</th>";
        }
        return "<table border=1><tr>"+print+"</tr></table>" ;        
}
