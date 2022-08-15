// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value;

function not(f) {
	return function(...args) { 			// Return a new function 
		let result = f.apply(this, args);// that calls f 
		return !result;					// and nagates its result
	};
}

const even  = x => x % 2 === 0; 		// A function to determine if a number is even
const odd = not(even);					// A a new function that does the opposite

console.log([1,1, 3, 5, 5].every(odd)); // => true every element of the array is odd


// Return a function that expects an array argument and applies f to
// each element, returning the array of return values.
// Contrast this with the map() function from earlier.
function mapper(f) {
	return a => map(a, f);
}

const increment = x => x + 1;
const incrementAll = mapper(increment);
console.log(incrementAll([1, 2, 3]));    // => [2, 3,4]