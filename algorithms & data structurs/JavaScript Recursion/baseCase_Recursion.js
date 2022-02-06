function countDownToZero(n) {
	//base case.Stop to 0
	if(n < 0) {
		return; 				// stop the functin

	}else {
		console.log(n);
		countDownToZero(n - 1); // count  down 1
	}
} 

countDownToZero(12);