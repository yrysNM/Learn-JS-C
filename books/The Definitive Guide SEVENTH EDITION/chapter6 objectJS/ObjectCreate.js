let o1 = Object.create({ 	//o1 inherits properties x and y
	x: 1,
	y: 2
});

console.log(o1.x + o1.y); // => 3

let o2 = Object.create(null); // o2 inherits no props or methods
console.log(o2);

let o3 = Object.create(Object.prototype);  // o3 is like {} or new Object
console.log(o3);