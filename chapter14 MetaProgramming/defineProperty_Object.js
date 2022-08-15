let o = {};				//Start with no properties at all 
// Add  a non-enumerable data property x with value 1.
Object.defineProperty(o, "x", {
	value: 1,
	writable: true, 
	enumarable: false,
	configurable: true
});

//Check that the property is there but is non-enumerable o.x
console.log(o.x); 					// =>  1
console.log(Object.keys(o));		// => []

//Now modift the property  so that is read-only
Object.defineProperty(o, "x", { writable: false });

//Try tochange the value of the property
o.x = 2;							// Fails silently or throws TypeError in strict mode
console.log(o.x);					// => 1

//The Property is still confiqurable so we can change its value like this:
Object.defineProperty(o, "x", { value: 2 });
console.log(o.x);					// => 2

//Now change x from a data property to an accessor property
Object.defineProperty(o, "x", {get: function() { return 0; }});

console.log(o.x);					// => 0