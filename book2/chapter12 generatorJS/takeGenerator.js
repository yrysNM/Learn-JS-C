function* fibonacciSequence() {
	let x= 0, y = 1;
	for(;;) {
		yield y; 
		[x,  y] = [y, x + y]; 		// Note destructing assignment
	}
 } 

//return the nth Fibonacci number
function fibonacci(n) {
	for(let f of fibonacciSequence()) {
		if(n-- <= 0) return f;
	}
}


// Yield the first n elements of the specified iterable object
function* take(n, iterable) {
	let it = iterable[Symbol.iterator](); 		//Get  iterator for iterable object 

	while(n-- > 0) {							// Loop n times
		let next = it.next();					// Get the next item from the iterator
		
		if(next.done) return;					// If there are  no more values, return early

		else yield next.value;					// Otherwise yield the value  

	}
}

console.log([...take(5, fibonacciSequence())]);// => [ 1, 1, 2, 3, 5 ]