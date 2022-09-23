// Given an array of iterables, yield their elements in interleaved order.

function* oneDigitPrimes() {			//  Invoking  this funciton does not run the code 

	yield 2;						   // but just returns a generator object Calling

	yield 3;							// the next() method of that generator runs

	yield 5;							// the code yntil a yield statment provides

	yield 7;							// the return value for the next() method. 

}


function* zip(...iterables) {
	// Get an iterator for each iterable
	let iterators = iterables.map(i => i[Symbol.iterator]());
	let index = 0;

	while(iterators.length > 0) {		//While there are still some iterators
		if(index >= iterators.length){	// if we  reached the last iterator
			index = 0;					// go back to the  firs one. 
		}

		let item = iterators[index].next();  // Get next item from  next iterator

		if(item.done) {					// if that  iterator is done
			iterators.splice(index, 1);     // then remove it from the array
		}else {
			yield item.value;				// yield the iterated value
			index++;						// and move on to the next iterator
		}	
	}
}

//Interleave three iterable objects
console.log([...zip(oneDigitPrimes(), "ab", [0])]);  //=> 
/* [
  2,   'a', 0, 3,
  'b', 5,   7
] */

function* sequence(...iterables) {
	for(let iterable of iterables) {
		for(let item of iterable) {
			yield  item;
		}
	}
}

console.log([...sequence("abc", oneDigitPrimes())]); //=> 
/* [
  'a', 'b', 'c', 2,
  3,   5,   7
] */


/* The sequence() generator function that we’ve
used can be simplified with yield* like this */
function* sequence2(...iterables) {
	for(let iterable of iterables) {
		yield* iterable;
	}
}

console.log([...sequence2("abc", oneDigitPrimes())]); // =>
/* [
  'a', 'b', 'c', 2,
  3,   5,   7
] */