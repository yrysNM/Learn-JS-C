let n = new  Map([		// A new map initialized with string keys mapped to numbers
	["one", 1],
	["two", 2]
]);

let copy = new Map(n);			// A new map with the same keya an values as map n

let o = {						//  An object with two properties
	x: 1,
	y: 2
};	

let p= new Map(Object.entries(o));   // Same as new  map
console.log(p);						// => Map(2) { 'x' => 1, 'y' => 2 }