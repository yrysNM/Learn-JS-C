
//Number.EPSILON
function numberEquals(x, y) {
	return Math.abs(x - y) < Number.EPSILON;
}

console.log(numberEquals(0.1 + 0.2,  0.3));				// => true


//Maximums, Infinite, Min
/* Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_
SAFE_IN- TEGER < Number.MAX_VALUE < Infinity */

//2️⃣
//Primality Test
/* function isPrime(n) {		
	if(n <= 1) return false;

	// check from  2 to n - 1
	for(let i = 2; i < n;i++) {
		if(n % i == 0) {
			return false;
		}
	}

	return true;
}

console.log(isPrime(97));			// O(n) */



/* 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
This is difficult to notice, but all primes are of the form 6k ± 1, with the exception of 
2 and 3 where k is some integer. Here’s an example:
5 = (6-1) , 7 = ((1*6) + 1), 13 = ((2*6) + 1) etc */
function isPrime(n) {
	if(n <= 1) return false; 
	if(n <= 3) return true; 

	//Thisis checked so that we can skip 
	// middle five number in below loop 
	if(n % 2 == 0 || n % 3 == 0) return false;

	for(let i= 5; i * i <= n; i = i + 6) {				//6k ± 1
	
		if(n % i == 0 || n % (i + 2) == 0) {
			return false;
		}
	}

	return true;

}

console.log(isPrime(97));								// O(sqrt(n))


//🔢
//Prime Factorization
function primeFactors(n) {
	// Print the number of 2s that divide n 
	while( n % 2 == 0) {
		console.log(2);
		n = n / 2;
	}

	// n must be odd at this point. So we can skip one element 
	//(Note i = i + 2)
	for(let i = 3; i * i <= n; i = i + 2) {
		//while i divides n print i and divide n 
		while(n % i == 0) {
			console.log(i);
			n = n / i;
		}
	}

	// This condition is to handle the case when n is a primse number 
	// greater than 2;
	if(n > 2) {
		console.log(n);
	}
}

primeFactors(25); 				//  => "5" and "2" Time Complexity: O(sqrt(n)) 