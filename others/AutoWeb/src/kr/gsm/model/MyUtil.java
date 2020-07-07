package kr.gsm.model;

public class MyUtil {
	
	public int totsum() {
		int s = 0;
		
	for(int i=1;i<=100;i++) {
		s+=i;
	}
	
	return s;
	
	}
	
	public int totsum(int start, int end) {
		int s = 0;
		
	for(int i=start;i<=end;i++) {
		if((i%3 == 0 )&&(i%5 == 0))
		s+=1;
	}
	
	return s;
	
	}
	
}
