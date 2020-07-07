package kr.gsm.model;
import java.util.Scanner;

public class menberVO {
	private String id;
	private String pwd;
	private int age;
	
	 public menberVO(String id, String pwd, int age) {
	        this.id = id;
	        this.pwd = pwd;
	        this.age = age;
	     
	    }
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	
	@Override
	public String toString() {
		return "menberVO [id=" + id + ", pwd=" + pwd + ", age=" + age + "]";
	}
}
