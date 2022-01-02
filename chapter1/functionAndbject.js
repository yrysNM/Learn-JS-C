function plus1(x) { //Define a function names "plus1" with parameter "x"

	return x + 1;
}

let y = 3;

console.log(plus1(y));


let square = function(x) {
	console.log(x * x);
}

square(plus1(y)); // => 16 invoke two function in one expression

//arrow  functions

const plusAr1 = x =>  x+ 1;

const sqAr = x => x * x;

console.log(plusAr1(y));
console.log(sqAr(y));