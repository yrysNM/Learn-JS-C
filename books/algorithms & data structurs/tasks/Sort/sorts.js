// bubble sort algorithms
function swap(arr, firstIndex, secondIndex){
	let temp = arr[firstIndex];
	arr[firstIndex] = arr[secondIndex];
	arr[secondIndex] = temp;
}

function bubbleSortAlgo(array) {
	let len = array.length;

	let i, j, stop; 

	for(i = 0;i < len;i++){
		stop= len - i;
		for(j = 0; j < stop; j++){
			if(array[j] > array[j + 1]) {
				swap(array, j, j + 1);
			}
		}
	}

	return array;
}

console.log(bubbleSortAlgo([2, 6, 3, 5, -75, 4, 1])); 		// =>
/* [
  -75, 1, 2, 3,
    4, 5, 6
] */


//selection sort 
function SelectionSortAlgo(array, compare_Function) {
	function comp(a, b) {
		return a - b;
	}

	let min = 0;
	let index = 0; 
	let temp = 0;

	compare_Function = compare_Function || compare; 

	for(let i = 0;i < array.length; i++){
		index = i; 
		min = array[i];
		for(let j = i + 1;  j < array.length; j++){
			// if(array[j] < min){
			// 	min = array[j];
			// 	index = j;
			// 	
			// }
			if(compare_Function(min, array[j]) > 0) {
				min = array[j];
				index = j;
			} 
		}

		temp = array[i];
		array[i] = min;
		array[index] = temp; 

	}

	return array;
}

console.log(SelectionSortAlgo([9, 15,  2, 44, -2, 36, 1], 
			function(a, b) { return a - b; }));					// => 
/* [
  -2,  1,  2, 9,
  15, 36, 44
   ] */					


//Merge Sort
function mergeArray(left, right){

	let result = [];

	while(left.length && right.length){
		result.push(left[0] > right[0] ? right.shift() : left.shift())
	}

	// if we still have values add end of results
	while(left.length){
		result.push(left.shift());
	}

	while(right.length){
		result.push(right.shift());
	}

	return result;
}

function mergeSort(ar) {
	if(ar.length < 2) return ar;

	const middle = Math.floor(ar.length / 2);
	const ar_l = ar.slice(0, middle);
	const ar_r = ar.slice(middle, ar.length);
	const sorted_l = mergeSort(ar_l);
	const sorted_r = mergeSort(ar_r);

	return mergeArray(sorted_l, sorted_r);

}


console.log(mergeSort([1, 44, 6, 84,  7, 5]));		// => [ 1, 5, 6, 7, 44, 84 ]

//Quick Sort 
const quickSort = (originalList) => {
	const list = [...originalList];

	if(list.length < 2)  return list;


	const pivot = list[0];

	const smaller = list.filter((item) => item < pivot);
	const bigger = list.filter((item) => item > pivot);
	//console.log("\n" + smaller + "~~" + bigger + "\n");
	return [...quickSort(smaller), pivot, ...quickSort(bigger)];

}

const a = [1, 6, 3, 4, 5, 1, 0, 4, 8]; 
console.log(quickSort(a));				//  => //[0, 1, 1, 3, 4, 4, 5, 6, 8



