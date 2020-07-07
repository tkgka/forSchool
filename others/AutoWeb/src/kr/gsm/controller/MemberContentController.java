package kr.gsm.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.gsm.model.MemberDAO;
import kr.gsm.model.menberVO;

/**
 * Servlet implementation class MemberContentController
 */
@WebServlet("/memcontent.do")
public class MemberContentController extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		MemberDAO dao = new MemberDAO();
		menberVO vo = dao.getbyid(id);
		
		// 검색된 회원정보를 상세보기페이지로 보내기 ->memberContent.jsp
		request.setAttribute("vo",vo);
		RequestDispatcher rd = request.getRequestDispatcher("membercontent.jsp");
		rd.forward(request, response);
		
		
	}

}

