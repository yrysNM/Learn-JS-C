let o = {}; // o inherits object methods from OBject.prototype
o.x = 1; // and it now has an own property x;

let p = Object.create(o); // p inherits properties from o and Object.prototype

p.y = 2; // and has own property y.

let q = Object.create(p); // q inherits properties from p,  o, and ...

q.z = 3; //  ...Object.property and has  an own property z.
let f = q.toString();  //toString is inherited from Object.property

console.log(q.x + q.y); // => 3 x and y are inherited from o and p

