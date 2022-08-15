// Return an array og functions that return the values 0 -9
function constFuncs() {
	let funcs = [];
	for(var i = 0; i < 10; i++) {
		funcs[i] = () => i;
	}

	return funcs;
}

let funcs = constFuncs();
console.log(funcs[5]()); 	// => 10 why does;t yhis return 5?

/* Fundamentally, the problem here is that variables declared
with var are defined throughout the function */