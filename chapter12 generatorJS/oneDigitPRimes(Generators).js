// A generator function that yields the set of one digit (base-10) primes.
function* oneDigitPrimes() {			//  Invoking  this funciton does not run the code 

	yield 2;						   // but just returns a generator object Calling

	yield 3;							// the next() method of that generator runs

	yield 5;							// the code yntil a yield statment provides

	yield 7;							// the return value for the next() method. 

}


//  When we invoke the generator function we get a generator 
let primes = oneDigitPrimes();

// A generator is an iterator object that iterates the yielded values

console.log(primes.next().value);		//  => 2
console.log(primes.next().value);		// => 3
console.log(primes.next().value);		// => 5
console.log(primes.next().value);		// => 7

console.log(primes.next().done);		// => true

// Generators have a Symbol.iterator method to make them iterable

console.log(primes[Symbol.iterator]()); // => primes Object [Generator] {}


// We can use generators like other iterable type
console.log([...oneDigitPrimes()]);		// => [2, 3, 5, 7]

let sum  = 0; 
for(let prime of oneDigitPrimes()) sum += prime;

console. log(sum);						// => 17


let o = {
	x: 1,
	y: 2, 
	z: 3, 
	// A generator that yields each of the keys of this object
	*g() {
		for(let key of Object.keys(this)) {
			yield key;
		}
	}
};

console.log([...o.g()]);			 // => [ 'x', 'y', 'z', 'g' ]