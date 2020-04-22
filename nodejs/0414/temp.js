exports.template = function(page, query,query2){
    return `<html>
    <head><meta charset='utf-8'></head><body>
    <font size ='7' color ='red'>${page} Page! </font>
    <br>사용자가 보낸 QueryString: ${query}
    <br>사용자가 보낸 QueryString2:${query2}
    </body></html>`;
}

