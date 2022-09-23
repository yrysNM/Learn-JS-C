let o = { //Start with an object
	x: 1,

}, p = { //Second object
	x: 1 
};

console.log(o === p); // => false distinct object


console.log(o.x = 2); //Mutate it by cahnging the value of a property
console.log(o.y = 3); //Mutate it again by adding a new 

let a = [1, 2, 3]; // Arrays are also mutable
console.log(a[0] = 0);  // Change the value of an array element
console.log(a[3] = 4); // Add a new array element

let s = [], d = [];
console.log(s === d); //=> false distinct arrays are never equal 

d = s;
console.log(d[0] = 1); 
console.log(s[0]);
console.log(s === d);

