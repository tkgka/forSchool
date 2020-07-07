package kr.gsm.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.gsm.model.MemberDAO;
import kr.gsm.model.menberVO;

@WebServlet("/meminsert.do")
public class MemberInsertController extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 String id=request.getParameter("id");
	       String pwd=request.getParameter("pwd");       
	       int age=Integer.parseInt(request.getParameter("age"));
	       
	       menberVO vo=new menberVO(id, pwd, age);
	       MemberDAO dao=new MemberDAO();
	       int cnt=dao.memInsert(vo);
	       if(cnt>0) {
	          // 성공->리스트페이지로 가라(전환)
	          response.sendRedirect("list.do");
	       }else {
	          throw new ServletException("실패함");
	       }

		
		

	}

}
