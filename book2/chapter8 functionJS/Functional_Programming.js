// nonfuncstional  style like this ...
let data = [1, 1, 3, 5, 5];								// This is our array of numbers
// The mean is the sum of the elements divide by the number of elements
let total = 0;
for(let i = 0;i < data.length;i++) total += data[i];
let mean = total / data.length; 						// mean === 3 the mean of our data is 3



// To compute the standard deviation, we first sum the squares of the deviation of each element from the mean.
total =0;
for(let i = 0;i < data.length;i++) {
	let deviation = data[i] - mean;
	total += deviation * deviation;
}

console.log(total);
let stddev = Math.sqrt(total / (data.length - 1)) 		// stddev == 2
console.log(stddev);


/* We can perform these same computations in concise functional style
using the array methods map() and reduce() like this: */

// First, define two simple functions
const sum = (x, y) => x  + y;
const square = x =>  x * x;

// Then use  functions with array methods to compute mean and stddev
let meanReduce = data.reduce(sum) / data.length;		// mean == 3
let  deviations = data.map(x =>  x - mean);
let stdDev = 
	Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));

console.log(stdDev);									// => 2 