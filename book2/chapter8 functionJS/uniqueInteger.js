// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;

// this function returns a different integer each time it is called
// It uses a property of itseld to remember the next value to be returned
function uniqueInteger() {
	return uniqueInteger.counter++;		//return and increment counter property
}

console.log(uniqueInteger()); 						// => 0
console.log(uniqueInteger());						// => 1



