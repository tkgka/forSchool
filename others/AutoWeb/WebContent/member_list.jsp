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
<h1>3204_���ȯ_ȸ������Ʈ ���(View)</h1>
<table border="1" width="300px;">
  <tr>
    <td>ID</td>
    <td>PWD</td>
    <td>AGE</td>
    <td>����</td>
  </tr>
 <% for(menberVO vo : list){  
    if(vo.getId().equals("���ȯ")){ %>
    <tr bgcolor="red">
    <td><a href="memcontent.do?id=<%=vo.getId() %>"><%=vo.getId()%></a></td>
    <td><%=vo.getPwd()%></td>
    <td><%=vo.getAge()%></td>
    <td> <a href="memdelete.do?id=<%=vo.getId()%>">����</a> </td>
    </tr>	
 <% }else{  %>
  <tr>
    <td><a href="memcontent.do?id=<%=vo.getId() %>"><%=vo.getId()%></a></td>
    <td><%=vo.getPwd()%></td>
    <td><%=vo.getAge()%></td>
     <td><a href="memdelete.do?id=<%=vo.getId()%>">����</a></td> 
  </tr>
 <%  } 
   } %>
   <tr>
   <td colspan="3" align="right">
   <a href="member.html">ȸ������</a>
   </td>
   </tr>
</table>
</body>
</html>
