const swap = (arr, leftIndex, rightIndex) => {
	let temp = arr[leftIndex];
	arr[leftIndex] = arr[rightIndex];
	arr[rightIndex] = temp;
}


function partition(arr, left, right) {
	if(arr.length < 2)			//base check 
		return arr;

	let pivot = arr[Math.floor((right + left) / 2)];
	
	while(left <= right) {
		
		while(arr[left] < pivot) {
			left++;
		}

		while(arr[right] > pivot) {
			right--;
		}

		if(left <= right) {
			swap(arr, left, right);
			left++; 
			right--;

		}
	}

	return left;


}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	let index;
	//Recursion 
	if(arr.length > 1){
		index = partition(arr, left, right);
		if(left < index - 1) {
			quickSort(arr, left, index - 1);
		}

		if(index < right){
			quickSort(arr, index, right);
		}
	}

	return arr;
}

console.log(quickSort([23, 2, 4, 6, 0, -1, 3]));