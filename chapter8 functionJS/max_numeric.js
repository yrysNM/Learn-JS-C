function max(first = -Infinity, ...rest) {
	let maxValue = first; 					//Start by assuming the first arg is biggest
											//That loop through the rest og the arguments looking of bigger
	for(let n of rest){
		if(n > maxValue){
			maxValue = n;
		}
	}

	//Return the biggest
	return maxValue;
}

console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6)); // => 100);