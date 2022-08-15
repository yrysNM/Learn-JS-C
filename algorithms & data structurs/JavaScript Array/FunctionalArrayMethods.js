//Map
let testMap = [1, 2, 3, 4, 5, 6, 7].map(function(value) {
	return value * 10;
});

console.log(testMap);		// =>  [10, 20, 30, 40, 50, 60, 70]

//filter
let testFilter = [100, 2003, 10, 203, 333, 12].filter(function(value) {
	return value > 100;
});

console.log(testFilter);	// => [ 2003, 203, 333 ]


//reduce 
let sum  = [0, 1, 2, 3, 4].reduce(function(prevVal, currentVal, index, array) {
	return prevVal + currentVal;
}); 

let sum2 = [0,1, 2, 3, 4].reduce(function(prevVal,  currentVal, index, array) {
	return prevVal + currentVal;
}, 1);

console.log(sum);			// => 10
console.log(sum2);			// => 11

