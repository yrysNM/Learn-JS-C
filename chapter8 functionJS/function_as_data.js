// We define some simple functions here
function add(x, y) { return x + y; }
function substract(x, y) { return x - y; }
function multiply(x,  y) { return x * y; }
function divide(x, y) { return x /  y; }

//Here's function that takes one of thepreceding functions 
// as an argument and invokes it on two operands
function operate(operator, operand1, operand2) {
	return operator(operand1, operand2);
}  

//We could invoke this function like this to compute the value 
//(2 + 3) + (4 * 5)
let i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
console.log(i);

//For the sake of the exampel we implement the simple function  again
// this time within an object literal;
const operators = {
	add: 		(x, y) => x + y,
	subtract:   (x, y) => x - y,
	multiply: 	(x, y) => x * y,
	divide: 	(x, y) => x / y,
	pow: 		Math.pow  		// This workd for predefined  functions too
};


// this function takes the name  of an operato, looks up that operator
// in the object, and then invokes ti one the supplied operands. 
//Note the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
	if(typeof operators[operation] === "function") {
		return operators[operation](operand1,operand2);
	}
	else throw "unknown operator.";
}

console.log(operate2("add", "hello", operate2("add", " ", "world"))); 	// = > "hello world"
console.log(operate2("pow", 10, 2)); 	//=> 100
