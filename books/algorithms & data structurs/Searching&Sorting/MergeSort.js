function merge(leftA, rightA) {
	let result  = [], leftIndex  = 0, rightIndex = 0;

	while(leftIndex < leftA.length && rightIndex < rightA.length) {
		if(leftA[leftIndex] < rightA[rightIndex]) {
			result.push(leftA[leftIndex++]);
		}else {
			result.push(rightA[rightIndex++]);
		}
	}

	let leftRemains = leftA.slice(leftIndex),
		rightRemains = rightA.slice(rightIndex);

	//odd remaining to resultant array
		return result.concat(leftRemains).concat(rightRemains);

}

function mergeSort(array) {
	if(array.length < 2) {
		return array; 			//Base case: array is now sorted since it's 
								// just 1 element

	}

	let midpoint = Math.floor((array.length) / 2), 
		leftArray = array.slice(0, midpoint), 
		rightArray = array.slice(midpoint, array.length);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
	/* Time Complexity: O(nlog2(n))
	   Space Complexity: O(n) 
	*/
}

console.log(mergeSort([6, 1,  23, 4, 2, 3]));		// => [ 1, 2, 3, 4, 6, 23 ]