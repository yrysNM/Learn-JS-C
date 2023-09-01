let o = {
	x: 1,
	y: 2, 
	z: 3
}; 

console.log(o.propertyIsEnumerable("toString")); // => false: not enumarable 

for(let p in o) {
	console.log(p); // Prints x, y, and z,but not toString

}

for(let p in o) {
	if(!o.hasOwnProperty(p)) continue; //Skip inherited properties
}

for(let op in o) {
	if(typeof o[op] === "function") continue;  // Skip all methods
	
}