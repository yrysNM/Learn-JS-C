// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
	const cache = new Map(); 	// Value cache stored in the closure.

	return function(...args) {
		//Create a string version of the arguments to use as a caches key
		let key = args.length + args.join("+");

		if(cache.has(key)) {
			return cache.get(key);
		}else {
			let result = f.apply(this, args);
			cache.set(key, result);
			return result;
		}
	};
}









// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
// algorithm: http://en.wikipedia.org/wiki/Euclidean_algorithm

function  gcd(a, b) { 			// Type checking for a and b has been omitted

	if(a < b) {					// Ensure that a  >= b when we start
		[a, b] = [b, a]			// Destructing assignment to swap variables
	}

	while(b !== 0) { 			// THis is Euclied's algoritm for GCD
		[a, b] = [b, a % b];
	}

	return a;
}

const gcdmemo = memoize(gcd);
console.log(gcdmemo(85, 187));//  => 17

 // Note that when we write a recursive function that we will be memoizing,
// we typically want to recurse to the memoized version, not the original.

const factorial = memoize(function(n) {
	return (n <= 1) ? 1: n * factorial(n - 1 );
});

console.log(factorial(5));	// => 120 also caches values for 4, 3, 2 and 1.