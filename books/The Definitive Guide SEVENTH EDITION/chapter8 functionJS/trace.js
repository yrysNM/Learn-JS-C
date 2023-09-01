// Replace themethod named m of the object 0 with a version that logs
// messages befre andafter invoking theoriginal method.
function  trace(o, m) {
	let original = o[m];								//Remember original method in the closure
	o[m] = function(...args) {							// Now define the new method
		console.log(new Date(), "Entering: ", m); 		// Log message

		let result = original.apply(this, args); 		// Invoke original

		console.log(new Date(), "Exiting: ", m);		// Log message

		return result;
	};
}     


trace([1, 2, 3], 2);