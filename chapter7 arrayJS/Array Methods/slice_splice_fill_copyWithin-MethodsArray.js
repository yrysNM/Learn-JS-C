
//slice
let a= [1, 2, 3, 4, 5];
console.log(a.slice(0, 3));	 	 // => [1, 2, 3]
console.log(a.slice(3)); 		 // => [4, 5]
console.log(a.slice(1, -1))		 // => [2, 3, 4]
console.log(a.slice(-3, -2))	 // => [3]


//splice()
let b = [1,2, 3, 4,5,6, 7, 8];
console.log(b.splice(4));		 // => [5,6, 7, 8]; b is now[1,2,3, 4]
console.log(b.splice(1, 2));	 // => [2, 3]; b is now [1, 4]
console.log(b.splice(1 , 1));	 // =>  [4]; b is now[1]


let c= [1, 2, 3, 4, 5];
console.log(c.splice(2, 0, "a", "b")); 	 // =>  []; c is now [1, 2, "a", "b", 3, 4, 5]
console.log(c.splice(2, 2, [1, 2], 3));  // => ["a","b] c is  now[1,2, [1,2], 3, 3, 4, 5];

//fill()
let f = new Array(5); 			// Stack with no elements and length 5
console.log(f.fill(0));			// => [0, 0, 0, 0, 0] fill the array with zeros
console.log(f.fill(9, 1));		// => [0, 9, 9, 9, 9] fill with 0 starting at index 1
console.log(f.fill(8, 2, -1));  // => [ 0, 9, 8, 8, 9 ] fill with 0 at indexes 2, 3

//copyWithin()
let arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(1)); 		 // => [1, 1, 2, 3, 4]: copy array elements up one
console.log(arr.copyWithin(2,3, 5))		 // => [1, 1, 3,4, 4 ]: copty last 2 elements toindex 2
console.log(arr.copyWithin(0, -2));		 // => [ 4, 4, 3, 4, 4 ] negative offsets work too