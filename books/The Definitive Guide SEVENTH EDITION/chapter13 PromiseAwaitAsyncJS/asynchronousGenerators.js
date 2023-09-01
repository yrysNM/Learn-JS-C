// A Promise-based wrapper around setTimeout() that we can use await with.
// Returns a Promise that fulfills in the specified number of
//milliseconds

function elapsedTime(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

//An async generator function that increments a counter and yields it
// a specified (or infinite) number of times at a specified interval. 

async function* clock(interval, max = Infinity) {
	for(let count = 1; count <= max; count++) {		//reual for loop

		await elapsedTime(interval);				// Wait for time to pass

		yield count;								// yield the count
	}
}

// A test function that uses the async generator with for/await
async function test() {
	// async so we can use for/await
	for await(let tick of clock(300, 100)) {	// loop 10 times evey 300
		console.log(tick);
	}
}

test();