let options ={
	timeout: 0,
	title: "",
	verbose: false,
	n: null
};


//The first-defined operator ?? evaluates to its first defined operand: if
//its left operand is not null and not undefined
console.log(options.timeout ?? 1000); // => 0 as defined in the object
console.log(options.title ?? "unititled"); // =>  "" as defined in the object
console.log(options.verbose ?? true); // => false: 
console.log(options.quite ?? false); // => false:  property is not defined
console.log(options.n ?? 10); //  10 property is null