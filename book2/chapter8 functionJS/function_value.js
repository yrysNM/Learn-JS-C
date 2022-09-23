function square(x) {
	return x * x;
}


let  s= square;				// Now s refers to the same function that square does
console.log(square(4));		// => 16
console.log(s(4));			// => 16

//obect 
let o = {
	square:  function(x) {
		return x * x; 		// An object literal
	}
};

let y = o.square(16);

console.log(y);				//=> 256

//array
let a= [x => x * x, 20]; 	// Ans array literal
console.log(a[0](a[1]));	// => 400