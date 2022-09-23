let m = new Map([["x", 1], ["y", 2]]);

console.log([...m]);

for(let [key, value] of m) {
	// one the first  iteration key will be "x" and value will be 1
	// one thesecond iteration key will be  "y" and value  will be 2
	console.log(key);
	console.log(value);
}