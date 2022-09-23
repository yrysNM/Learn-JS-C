let a = ["banana", "cherry", "apple"]; 
console.log(a.sort());  		// a ==> [ 'apple', 'banana', 'cherry' ]

let arr = [33, 4, 1111, 222];
console.log(arr.sort()); 		// => [ 1111, 222, 33, 4 ] alphabetical order

arr.sort(function(a, b) {		// Pass a comparator function
	return a - b; 				//Returns < 0, 0,  or > 0,depeding on order
}); 							

console.log(arr)				// =>  [ 4, 33, 222, 1111 ]  numerical order

console.log(arr.sort((a, b) => b - a)); // => [ 4, 33, 222, 1111 ] reverse numerical order

let arr_str = ["ant", "Bug",  "cat", "Dog"];
console.log(arr_str.sort()); 	// => [ 'Bug', 'Dog', 'ant', 'cat' ] case-sensitive sort

arr_str.sort(function(s, t) {
	let a = s.toLowerCase();
	let b = t.toLowerCase();

	if(a < b) return -1;
	if(a >  b) return 1;
	return 0;
});
console.log(arr_str)		 	// => [ 'ant', 'Bug', 'cat', 'Dog' ]  ; case-insensitive sort

