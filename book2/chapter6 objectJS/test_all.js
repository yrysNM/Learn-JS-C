let o ={ //property is explicity set to undefined
	x: undefined
};

console.log(o.x !== undefined); // => false: property exists but is undefined 
console.log(o.y !== undefined); // => false: property doesn;t even exist

console.log("x" in o); // true
console.log("y" in o); // false

delete o.x // delete th roperty x
console.log("x" in o);  // => false: it doesn't exist