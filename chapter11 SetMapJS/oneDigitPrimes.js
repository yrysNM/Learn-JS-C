let oneDigitPrimes = new Set([2, 3, 5, 7]);
console.log(oneDigitPrimes.has(2));				// => true 2 is a  one-digit prime number
console.log(oneDigitPrimes.has(3));				// => true so is 3
console.log(oneDigitPrimes.has(4));				// =>  false: 4 is not a prime
console.log(oneDigitPrimes.has("5"));			// => false: "5" is not even a  number;