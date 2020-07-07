

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/sh.do")
public class Shopping extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		int num = 0;
		for(int i=1;i<=100;i++) {
			if(i%2 ==0) {
				num +=i;
			}
		}
		response.setContentType("text/html;charset=euc-kr");
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<body>");
		//out.println("3204_±è¼öÈ¯");
		out.println(num);
		out.println("</body>");
		out.println("</html>");	
	}
	
}
