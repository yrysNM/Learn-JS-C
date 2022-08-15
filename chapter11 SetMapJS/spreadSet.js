let oneDigitPrimes = new Set([2, 3, 5, 7]);

console.log([...oneDigitPrimes]); 			// => the set converted to an Array

console.log(Math.max(...oneDigitPrimes));  	// => 7 :set  elements passed as function arguments
