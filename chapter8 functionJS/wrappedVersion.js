//This function takes a function and returns a wrapped version
function timed(f) {
	return function(...args) { 		//Collect args into a rest parameter array
		console.log(`Entering function ${f.name}`);

		let startTime = Date.now();
		try {
			// Pass all of out arguments tothe wrapped function
			return f(...args); 	 	// Spread the args back out again
		}
		finally {
			//Befor we return the wrapped return value, print elapsed  time
			console.log(`Exiting  ${f.name} after ${Date.now() -startTime}ms`);
		}

	};
}


// COmpute the sum of the numbers between 1 and n by brute forse
function benchmark(n) {
	let sum  = 0;
	for(let i=  1; i <= n;i++) sum += i;

	return sum;
} 

// Now invoke the timed version of that test function
console.log(timed(benchmark)(1000000));   // => 500000500000; this is the sum of  the numbers
