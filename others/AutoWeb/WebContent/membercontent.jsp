<%@page import="kr.gsm.model.menberVO"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    
    
<%
	menberVO vo = (menberVO)request.getAttribute("vo");
%>    

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>

<script type="text/javascript">

function listGO() {
	location.href="list.do";
}

</script>

</head>
<body>
<h1>ȸ������ ����(3204_���ȯ)</h1>

<form action="memupdate.do" method="post">
<input type="hidden" name="id" value="<%=vo.getId()%>">
<table border="1">
<tr>
<td>ID</td>
<td><%=vo.getId()%></td>
</tr>
<tr>
<td>PWD</td>
<td><input type="text" name="pwd" value="<%=vo.getPwd()%>"></td>
</tr>
<tr>
<td>AGE</td>
<td><input type="text" name="age" value="<%=vo.getAge()%>"></td>

<tr>
<td colspan='1' align="center">

	<input type="submit" value="����">
	<input type="reset" value="���">
	<input type="button" value="����Ʈ" onclick="listGO()">

</td>
</tr>
</table>
</form>
</body>
</html>