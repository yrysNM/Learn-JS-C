import java.util.*;
import java.math.*;

class minimumNumber {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);

		int n = in.nextInt();
		int[] arr = new int[n];
		for(int i =0; i< n; i++) {
			arr[i] = in.nextInt();
		}

		System.out.print(maxProfit(arr));
	}

	public static String  maxProfit(int[] num1) {
		// String str1 = String.valueOf(num1);

		// //String strNum = str1 + str2;
		// char[] sorChar = str1.toCharArray();

		// Arrays.sort(sorChar);

		// if(sorChar[0] != '0') {
		// 	 return String.valueOf(sorChar);
		// 	//System.out.print(String.valueOf(sorChar));
		// 	//return Integer.parseInt(strNum);
		// }

		// int ind = 0; 

		// for(int i = 0; i < sorChar.length;i++) {
		// 	if(sorChar[i] > '0') {
		// 		ind = i; 
		// 		break;
		// 	}
		// }

		// char tmp= sorChar[0];
		// sorChar[0] = sorChar[ind];
		// sorChar[ind] = tmp;
		

		// return String.valueOf(sorChar);
		return "s";
	}
}


