import Heap from "./classHeap.mjs";

export default function MinHeap(items) {
	this.items = items;
}

MinHeap.prototype = Object.create(Heap.prototype);

//inherit helpers from heap by copying prototype
MinHeap.prototype.bubbleDown = function() {
	let index = 0;

	while(this.leftChild(index) && this.leftChild(index) < this.items[index]) {
		let smallerIndex = this.leftChildIndex(index);

		if(this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
			//if right is smalle  right swaps
			smallerIndex = this.rightChilderIndex(index);

		}

		this.swap(smallerIndex, index);
		index = smallerIndex;
	}
}

MinHeap.prototype.bubbleUp = function() {
	let index = this.items.length - 1;

	while(this.parent(index) && this.parent(index) > this.items[index]) {
		this.swap(this.parentIndex(index), index);
		index = this.parentIndex(index);
	}
}


let heap = new MinHeap([12, 2, 23, 4, 13]);
heap.bubbleDown();
heap.bubbleUp();

console.log(heap);