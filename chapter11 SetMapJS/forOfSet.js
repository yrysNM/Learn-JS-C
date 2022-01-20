let oneDigitPrimes = new Set([2, 3, 5, 7]);

let sum =0; 
for(let p of oneDigitPrimes) {		// Loop through the one-digit primes
	
	sum += p;						// and add them up 

}

console.log(sum);					// => 17 2 + 3 + 5 + 7