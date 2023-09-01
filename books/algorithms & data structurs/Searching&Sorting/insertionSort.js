function insertionSort(items) {
	let len = items.length,		//number of items in the array
		value, 					// the value currently being compared
		i, 						// index into unsorted secton
		j;						// index into sorted section

	for(let i = 0;i < len; i++) {
		//store the current value becouse itmay shift later
		value = items[i];

		//Whenever the value in the sorted section is greated than the value 
		// in the unsorted, shift all items in the sorted section 
		// over by one.This creates space in which to insert the value 

		for(let j = i - 1; j > -1 && items[j] > value; j--) {
			items[j + 1] = items[j];
		}

		items[j + 1] = value;
	}

	return items;
}

function sortInsertion(arr) {
	let  k;
	for(let i = 1; i < arr.length;i++) {
		k= arr[i];
		let j = i - 1; 
		while(j >= 0 && arr[j] > k) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}

		arr[j + 1] = k;
	}

	return arr;				//Time complexity: o(n^2)
							// spacecomplexity: o(1)
}

console.log(sortInsertion([6,1, 23, 4, 2, 3]));		// => [ 1, 2, 3, 4, 6, 23 ]