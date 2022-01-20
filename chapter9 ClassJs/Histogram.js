/**
* A Set-like class that keeps track of how many times a value
has
* been added. Call add() and remove() like you would for a
Set, and
* call count() to find out how many times a given value has
been added.
* The default iterator yields the values that have been added
at least
* once. Use entries() if you want to iterate [value, count]
pairs.
*/

class Histogram {
	// TO initialize w just create a Map object to delegate to
	constructor() {
		this.map = new Map();
	}

	//FOr any given key the count is the value in the Map or zero 
	// if the key does not appear in the Map
	count(key) {
		return this.map.get(key) || 0;
	}

	// The set-like  method has() returns true if the count is non-zero
	has(key) {
		return this.count(key) > 0;
	}

	// The size of the histogram isjust the number of entries inthe Map
	get size(){
		return this.map.size;
	}

	//The add a key just increment its count in the Map.
	add(key) {
		this.map.set(key, this.count(key) + 1);
	}


	//Deleting a key is a little trickier becouse we have to delete
	// the key from the Map is the count goes back  down to zero
	delete(key) {
		let count = this.count(key);
		if(count === 1)  {
			this.map.delete(key);
		}else if(count > 1){
			this.map.set(key,count - 1);
		}

	}

	// iterating a HIstogram just returns the keys stored in it 
	[Symbol.iterator]() {
		return this.map.keys(); 
	}

	//These  other iterator  methods just delegate to the Map object 
	keys(){
		return this.map.keys();
	}

	values() {
		return this.map.values();
	}

	entries(){
		return this.map.entries();
	}
}

let map = new Histogram();
map.add(1, "Yrysbek");
map.add(2, "Erkebulan");
map.add(3, "Arsen");

console.log(map.has(1)); 		// => true 
console.log(map.keys()); 		// => [Map Iterator] { 1, 2, 3 }
console.log(map.size);			// => 3 