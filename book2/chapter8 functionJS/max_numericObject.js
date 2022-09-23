function max(x){
	let maxValue = -Infinity;
	for(let i = 0; i < arguments.length; i++) {
		if(arguments[i] > maxValue) maxValue = arguments[i];
	}

	return maxValue;
}


console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6)); // => 1000