
//1) USING SETS TO CHECK FOR DUPLICATES IN AN ARRAY
function checkDuplicates(arr) {
	let st = new Set();
	for(let val of arr) {
		st.add(val);
	}

	return st.size != arr.length;
}

function checkDuplicatesBetter(arr) {
	let mySet = new Set(arr);

	return mySet.size < arr.length;
}


console.log(checkDuplicates([1, 2, 3, 3, 5]));		// => true
console.log(checkDuplicatesBetter([1,3, 3, 4, 5])); //  => true

/* Time Complexity: O(n)
   Space Complexity: O(n) 
*/



//2)RETURNING ALL UNIQUE VALUES FROM SEPARATE ARRAYS
function uniqueList(arr1, arr2) {
	let mySet = new Set(arr1.concat(arr2));

	return Array.from(mySet);
}

console.log(uniqueList([1, 1, 2, 2], [2, 3, 4, 5]));// => [ 1, 2, 3, 4, 5 ]
console.log(uniqueList([1, 2], [3, 4, 5]));			// => [ 1, 2, 3, 4, 5 ]
console.log(uniqueList([], [2, 3, 4, 5]));			// => [ 2, 3, 4, 5 ]

/* Time Complexity: O(n + m )
   Space Complexity: O(n + m)
*/