// Iteratos
let sum = 0;
for(let  i of [1, 2, 3]) { 		// Loop once for each of these valeus
	sum += i;
}

console.log(sum);

let chars = [..."absd"];		//  chars == ["a", "b", "c", "d"]
let data = [1, 2,3, 4, 5];		
console.log(Math.max(...data));// => 5


let purpleHaze  = Uint8Array.of(255, 0, 255, 128);
let [r, q, b, a] = purpleHaze; 	// a  === 128
console.log(r + " " + q +  "...");

let m = new Map([["one", 1], ["two", 2]]);
for(let [k, v] of m) {
	console.log(k, v);			// => one 1	two 2
}

[...m]; // => [["one", 1], ["two", 2]]: default iteration

[...m.entries()]; // => [["one", 1], ["two", 2]]: entries() method is the same

[...m.keys()]; // => ["one", "two"]: keys() method iterates just map keys

[...m.values()]; // => [1, 2]: values() method iterates just map values

// Strings are iterable, so the two  sets are the same:
console.log(new Set("abs"));	// => Set(3) { 'a', 'b', 's' }

let iterable = [99];
let iterator  = iterable[Symbol.iterator]();
for(let result = iterator.next(); !result.done; result = iterator.next()) {
	console.log(result.value);	// => result.value === 99
}

let list = [1,2,3,4,5];
let iter = list[Symbol.iterator]();
let head = iter.next().value; // head == 1
let tail = [...iter]; // tail == [2,3,4,5]

//Generators
function* generator() {
	yield 1;
	yield 2; 
	yield 3; 
}

const gen = generator(); 	// Generator { };

console.log(gen.next().value);	// => 1
console.log([...generator()]);  // => [ 1, 2, 3 ]
console.log(gen.next().value);  // => 2
console.log(gen.next().value);  // => 3
console.log(gen.next().value); 	// => undefined