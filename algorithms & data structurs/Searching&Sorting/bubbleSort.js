function bubbleSort(arr) {
	for(let i = 0;i < arr.length; i++) {
		for(let j = i; j < arr.length; j++) {
			if(arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}

	return arr;			//Time complexity: o(n^2)
						// Space complexity: o(1)
}

console.log(bubbleSort([6, 1,2, 5, 3, -1,0])); // => 
/* 
[
  -1, 0, 1, 2,
   3, 5, 6
]
 */


//another variant 
function swap(array, index1, index2) {
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

function sortBubble(array) {
	for(let i = 0, arrayLength = array.length; i < arrayLength; i++) {
		for(let j = 0;j <= i; j++) {
			if(array[i] < array[j]) {
				swap(array, i, j);
			}
		}
	}

	return array;		//Time complexity: o(n^2)
						// space complexity: o(1)
}

console.log(sortBubble([6, 1, 2, 3, 4, 5]));		// => [ 1, 2, 3, 4, 5, 6 ]
