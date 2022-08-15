function* oneAndDone() {
	yield 1; 
	return "done";
}

//The return value does not appear innormal iteration.
console.log([...oneAndDone()]);		// => [1]

// But  is is avaliable is you explicity call  next()
let generator = oneAndDone();	
console.log(generator.next());		// => { value: 1, done: false }
console.log(generator.next());		// => { value: 'done', done: true }

// If the generator is already done, the return value is not returned again

console.log(generator.next());		//  => { value: undefined, done: true }