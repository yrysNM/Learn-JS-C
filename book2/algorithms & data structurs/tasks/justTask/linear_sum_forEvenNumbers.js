function sumEven(number) {
	if(number === 0) {
		return 0;
	}else if(number % 2  !== 0) {
		return sumEven(number - 1);
	}

	return number + sumEven(number - 1);
}

console.log(sumEven(4));