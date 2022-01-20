// This function expects an array argument. The first two elements of that
// array are unpacked into the x and y parameters. Any remaining elements
// are stored in the coords array. And any arguments after the first array
// are packed into the rest array.
function f([x, y, ...coords], ...rest) {
	return [x + y, ...rest, ...coords];   // Note: spread operator here
}

console.log(f([1, 2, 3, 4], 5, 6));  	 // => [ 3, 5, 6, 3, 4 ]