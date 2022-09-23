function factorial(x) {
	//if the input argumetn is invlaid throw an exception!
	if(x < 0) throw new Error("x must not be negative");
	
	//Otherwise compute a value and return normally 
	let f; 
	for(f = 1; x > 1; f *= x, x--) /* emtpty */;
	return f;	
}

console.log(factorial(5)); // => 120