package kr.gsm.controller;
import java.io.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.gsm.model.MyUtil;

@WebServlet("/tot.do")
public class TotalController extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		 MyUtil my = new MyUtil();
		 int result = my.totsum(Integer.parseInt(request.getParameter("su1")),Integer.parseInt(request.getParameter("su2")));
		 
		 
		response.setContentType("text/html;charset=euc-kr");
		PrintWriter out= response.getWriter();
		 out.println("<html>");
		 out.println("<body>");
		 out.println(Integer.parseInt(request.getParameter("su1"))+"~"+Integer.parseInt(request.getParameter("su2"))+"<br>"+"3204_ ±è¼öÈ¯ :"+result+"°³");
		 out.println("</body>");
		 out.println("</html>");
	}
}
