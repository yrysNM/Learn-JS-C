function quickSort(items) {
	return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
	let index; 

	if(items.length > 1) {
		index = partition(items, left, right);

		if(left < index - 1) {
			quickSortHelper(items, left, index  - 1);
		}

		if(index < right){
			quickSortHelper(items, index, right);
		}
	}
	return items;
}

function partition(array, left, right) {
	let pivot = array[Math.floor((right + left) / 2)];
	while(left <= right) {
		while(pivot > array[left]) {
			left++;
		}

		while(pivot < array[right]) {
			right--;
		}

		if(left <= right) {
			let temp = array[left];
			array[left] = array[right];
			array[right] = temp;
			left++; 
			right--;
		}
	}

	return left;			//Time complexity:   o(nlog(n))
							// SPace somplexity: o(log(n))
}

console.log(quickSort([6, 1, 23, 4, 2, 3])); // => [ 1, 2, 3, 4, 6, 23 ]
