let arra1 = [12, 3, 4, 2, 1, 34, 23];

//console.log(arra1.sort());	// =>
// [
//   1, 12, 2, 23,
//   3, 34, 4
// ]

/* In the previous example, notice that numbers starting with 1 came first (1, 12), then 
numbers starting with 2, and so forth. This is because no comparator function was passed 
and JavaScript converted the elements into a string and sorted it according to the alphabet.
To sort numbers correctly, use this */
function comparetorNumber(a, b) {
	return a - b;
}

console.log(arra1.sort(comparetorNumber));

// [
//    1,  2,  3, 4,
//   12, 23, 34
// ]
