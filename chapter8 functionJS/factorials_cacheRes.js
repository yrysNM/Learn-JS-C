// Compute factorials and cache results as properties of the function  itself
function factorial(n) {
	if(Number.isInteger(n) && n > 0) { 			//Positive integer only
		
		if(!(n in factorial)) {  				// if no cached result
			factorial[n] = n * factorial(n - 1);// Compute and  cache it
		}
		return factorial[n]; 					// return the cached result

	}else {
		return NaN; 							// if input was bad
	}
}

factorial[1] = 1; 								// Initialize the cache to hold this base case
console.log(factorial(8));						// =>  720
console.log(factorial[6]);						// =>  120 ths call  above caches this value
console.log(factorial[7]);