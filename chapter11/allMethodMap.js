let m = new Map(); 				// Start with an empty map

console.log(m.size);			// => 0 empty maps have no keys

m.set("one", 1 ); 				//  Map the key "one" to the value 1
m.set("two", 2);				// 	And  the key "two" to the value 2

console.log(m.size);			//  => 2 the map now has two keys

console.log(m.get("two"));		// => 2 : return the value  associated with key "two"
console.log(m.get("three")); 	// => undefined this key is not in the set

m.set("one", true);				//  Change the value associated with an existing  key

console.log(m.size);			// => 2: the size  doesn;t change

console.log(m.has(true));		// => false: the map does not have a key‼ true
console.log(m.delete("one"));	// => true:the key existed and deletion suceeded  
m.clear();						// Remove all keys and values from the map;


 //allows maps

let ml = new Map().set("one", 1).set("two", 2).set("three",  3);  //... 
console.log(ml.size);			// => 3
console.log(ml.get("three"));	// => 3

console.log([...ml.keys()]); 	// => [ 'one', 'two', 'three' ]
console.log([...ml.values()]);  // => [ 1, 2, 3 ]
console.log([...ml.entries()]); //  => [ [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] ]