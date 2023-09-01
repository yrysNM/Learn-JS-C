function zigZagConcat(str, n) {
	if(n == 1) return str;

	let letterStr = [...str];

	let len = str.length;

	let arr = new Array(n);

	arr.fill("");

	let row = 0;
	let down = true;

	for(let i  = 0; i< len; i++) {
		arr[row] +=  letterStr[i];

		if(row == n - 1) {
			down = false;

		}else if(row == 0) {
			down = true;
		}

		if(down) {
			row++;
		}else {
			row--;
		}
	}

	return arr.join('');
}


let s = "PAYPALISHIRING", numRows = 3;
console.log(zigZagConcat(s, numRows));