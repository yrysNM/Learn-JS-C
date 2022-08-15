function swap(array, index1, index2) {
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}


function selectionSort(items) {
	let len = items.length,
		min;

	for(let i = 0;i < len;i++) {
		//set minimum to this position
		min = i;
		//check the rest of the array to see it anything is smaller
		for(let j= i + 1; j < len;j++) {
			if(items[j] < items[min]) {
				min = j;
			}
		}

		//if the minimum isn;t in theposition swap it
		if(i != min) {
			swap(items, i,  min);

		}
	}
	return items;			// Time complexity: o(n^2)
							// Space complexity: o(1)
}

console.log(selectionSort([6, 1, 23, 4, 2, 3]));		// => [ 1, 2, 3, 4, 6, 23 ]

