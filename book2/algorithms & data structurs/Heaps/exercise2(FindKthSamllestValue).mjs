import MinHeap from './Min_Heap.mjs';
var array1 = [12, 3, 13, 4, 2, 40, 23];
function getKthSmallestElement(array, k) {
	let minH = new MinHeap();

	for(let i = 0; i < array.length; i++) {
		minH.add(array[i]);
	}

	for(let i = 1;i < k; i++) {
		minH.poll();
	}

	return minH.poll();
}

console.log(getKthSmallestElement(array1, 2)); 		// 3
console.log(getKthSmallestElement(array1, 1));		// 2
console.log(getKthSmallestElement(array1, 7));		// 40