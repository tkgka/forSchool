package kr.gsm.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.gsm.model.MemberDAO;

@WebServlet("/memdelete.do")
public class MemberDeleteController extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String id=request.getParameter("id");
		MemberDAO dao = new MemberDAO();
		int cnt = dao.memDelete(id);
		
	       if(cnt>0) {
		          // ����->����Ʈ�������� ����(��ȯ)
		          response.sendRedirect("list.do");
		       }else {
		          throw new ServletException("������");
		       }
	}

}
