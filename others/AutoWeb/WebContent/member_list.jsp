<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@page import="java.util.*" %>
<%@page import="kr.gsm.model.*" %>
   
<%
    List<menberVO> list=(List<menberVO>)request.getAttribute("list");
%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
<h1>3204_김수환_회원리스트 출력(View)</h1>
<table border="1" width="300px;">
  <tr>
    <td>ID</td>
    <td>PWD</td>
    <td>AGE</td>
    <td>삭제</td>
  </tr>
 <% for(menberVO vo : list){  
    if(vo.getId().equals("김수환")){ %>
    <tr bgcolor="red">
    <td><a href="memcontent.do?id=<%=vo.getId() %>"><%=vo.getId()%></a></td>
    <td><%=vo.getPwd()%></td>
    <td><%=vo.getAge()%></td>
    <td> <a href="memdelete.do?id=<%=vo.getId()%>">삭제</a> </td>
    </tr>	
 <% }else{  %>
  <tr>
    <td><a href="memcontent.do?id=<%=vo.getId() %>"><%=vo.getId()%></a></td>
    <td><%=vo.getPwd()%></td>
    <td><%=vo.getAge()%></td>
     <td><a href="memdelete.do?id=<%=vo.getId()%>">삭제</a></td> 
  </tr>
 <%  } 
   } %>
   <tr>
   <td colspan="3" align="right">
   <a href="member.html">회원가입</a>
   </td>
   </tr>
</table>
</body>
</html>
