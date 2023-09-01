let a= [1,2 , 3, 4, 5]; // Start with a 5 element array

a.length = 3; // a is now [1, 2, 3]
console.log(a); //  => [1, 2, 3]

a.length = 0; // delete all elements a is []
console.log(a); // => []

a.length = 5; // length is 5, but no elements like new Array(5)
console.log(a); // => [ <5 empty items> ]