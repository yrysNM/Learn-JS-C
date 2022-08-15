let a= [1, 2, 3, 4, 5];

console.log(a.reduce((x, y) => x + y, 0));					 	// => 15 the sum og the values
console.log(a.reduce((x, y) => x * y, 1)); 						// => 120 the product of the values  
console.log(a.reduce((x, y) => (x > y) ? x : y)); 				// =>5 the largest of  the values

// Compute 2^(3^4). Exponentiation has right-to-left precedence
let b = [2, 3, 4];
console.log(b.reduceRight((acc, val) => Math.pow(val, acc)));  	// => 2.4178516392292583e+24
