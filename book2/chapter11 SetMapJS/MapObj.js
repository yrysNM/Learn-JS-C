let m = new Map();		
m.set({}, 1);				// Map one empty object to =the number 1 
m.set({}, 2);				// Map  diffrent empty object t the number2

console.log(m.size) 		// => 2: there are two keys in this map
console.log(m.get({}));		// => undefined  but this empty object is not a key❕

m.set(m, undefined); 		// Map the map itself to the value undefined

console.log(m.has(m));		// true: m is a key in itself
console.log(m.get(m));		// => undefined: same value we' get is m wasn;t a key
 
	