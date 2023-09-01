const fib = (n) => {
	if(n  <= 2) return 1;

	return fib(n - 1) + fib(n - 2);			// TIme complexity: O(2^n)
};

let cache = {};
const bestFib = (n) => {
	if(n <= 2) return 1; 
	if(cache[n]) return cache[n]; 

	return (cache[n] = bestFib(n - 1) + bestFib(n - 2)); 
	//Time complexity: O(n)
};

console.log(bestFib(6));		// => 8
console.log(bestFib(8));		// =>21
console.log(bestFib(50));		// => 12586269025