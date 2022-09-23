let unitcircle = {
	r: 1
}; // An object to inherit from 

let c = Object.create(unitcircle); //c inherits the property r

c.x = 1; c.y = 1; // c defines two properties of its own

c.r = 2; //c overrides it inherited property

console.log(unitcircle.r); // =>1 the property is not affected

console.log(c.r); // => 2 change 

console.log(c.s); // => undefined rpoperty doesn;t exist