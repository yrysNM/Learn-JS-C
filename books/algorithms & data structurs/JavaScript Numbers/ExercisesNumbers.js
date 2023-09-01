//1) (xˆy) % p

//Base: 6x1077, Exponent: 27, Modulus: 497

function modularExponentioation(base, exponent, modulus) {
	return Math.pow(base, exponent) % modulus;
}		// not enhough



/*Example: Base: 4, Exponent: 3, Modulus: 5
	4ˆ3 % 5 = 64 % 5 = 4
	value = (lastValue x base ) % modulus:
	value = (1 x 4) % 5 = 4 % 5 = 4
	value = (4 x 4) % 5 = 16 % 5 = 1
	value = (1 x 4) % 5 = 4 % 5 = 4 
*/
function modularExponentiation1(base, exponent, modulus){
	if(modulus == 1) return 0;

	let value = 1; 
	for(let i = 0; i < exponent; i++){
		value = (value * base) % modulus; 

	}

	return value;								// => Time Complexity: O(n	
}

console.log(modularExponentiation1(4, 3, 5))	// => 4


//💭
//2)Print all primes less than n
function allPrimesLessThanN(n) {
	for (let i = 0; i < n; i++) {
		if(isPrime(i)) {
			console.log(i);
		}
	}
}

function isPrime(n) {
	if(n <= 1) return false;
	if(n <= 3) return true;


	//this is checked so that we can skip 
	// middle five nubers in below loop
	if(n % 2 == 0 || n % 3 == 0) return false;

	for(let i = 5;i * i <= n; i = i+ 6) {
		if(n % i == 0 || n %(i + 2) == 0){ 
			return false;
		}
	} 

	return true;								//  O(nsqrt(n)
}

allPrimesLessThanN(15);							// => 2, 3,5, 7, 11, 13



//3)Check for a set of prime factors

function  maxDivide(number, divisor) {
	while(number % divisor == 0) {
		number /= divisor;
	}

	return number;								// => O(log~divisor(number)
}

function isUgly(number) {
	number = maxDivide(number, 2);

	number = maxDivide(number, 3);

	number = maxDivide(number, 5);

	return number === 1;
}

function arrayNUglyNumbers(n) {
	let counter = 0, currentNumber = 1,
		uglyNumbers =[];

	while(counter != n){
		if(isUgly(currentNumber)) {
			counter++;
			uglyNumbers.push(currentNumber);
		}
		currentNumber++;
	}

	return  uglyNumbers;
}

//Time Complexity for isUgly: O(log~2(n))
//Time Complexity for arrayNUglyNumbers: O(n(log~2(n))
console.log(arrayNUglyNumbers(9));	