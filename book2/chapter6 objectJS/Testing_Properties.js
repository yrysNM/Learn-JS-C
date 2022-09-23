let o = {
	x: 1
};


//Test with  "in" method
console.log("x" in o); // => true: o has an own property "x"
console.log("y" in o); // => false: o doesn't have a property "y"
console.log("toString" in o); // => true o inherits a  toStirng property


//Test with "hasOwnProperty"
console.log("\n" + o.hasOwnProperty("x")); // => true: o has an own property x
console.log(o.hasOwnProperty("X")); // => false
console.log(o.hasOwnProperty("y")); // => false: o doesn't have aproperty y
console.log(o.hasOwnProperty("toString")); // => false: toString is an inherited property

//Test with propertyIisEnumerable
console.log("\n" + o.propertyIsEnumerable("x")); // => true: o has an own enumerable property x
console.log(o.propertyIsEnumerable("toString")); // => false : not a own property
console.log(Object.prototype.propertyIsEnumerable("toString")); // => false : not enumarable


o.x !== undefined // => true: o has a property x
o.y !== undefined // => false: o doesn't have a property y
o.toString !== undefined // => true: o inherits a toString