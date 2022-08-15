function wait(duration){
	// Create and return  a new Promise 
	return new  Promise((resolve, reject) => {			// These control the PRomise
		// if the argument is  invalid reject the Promise
		if(duration <  0) {
			reject(new Error("TIme travel not yet implemented"));
		}

		// Otherwise, wait asynchronously and then resolve
		//the Promise.
		// setTimeout will invoke resolve() with no
		//arguments, which means
		// that the Promise will fulfill with the undefined
		//value.

		setTimeout(resolve, duration);

	});
}

console.log(wait(5000));