let a = {
	"0": "a",
	"1": "b", 
	"2": "c",
	length: 3
}; // An array-like object


console.log(Array.prototype.join.call(a, "+"));						// => a+b+c
console.log(Array.prototype.map.call(a, x => x.toUpperCase()));  	// => [ 'A', 'B', 'C' ]
console.log(Array.prototype.slice.call(a, 0));						// => [ 'a', 'b', 'c' ] true arraycopy
console.log(Array.from(a));  // => [a, b, c] easier array  copy