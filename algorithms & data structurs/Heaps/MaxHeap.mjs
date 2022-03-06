import Heap from './classHeap.mjs';


export default function MaxHeap() {
	this.items = [];
}

MaxHeap.prototype = Object.create(Heap.prototype);
//Inherit helpers from heap by copying prototype

MaxHeap.prototype.add = function(item) {
	this.items[this.items.length] = item;
	this.bubbleUp();
}

MaxHeap.prototype.poll = function() {
	let item = this.items[0];

	this.items[0] = this.items[this.items.length - 1];
	this.items.pop();
	this.bubbleDown();

	return item;
}

MaxHeap.prototype.bubbleDown = function() {
	let index = 0;
	while(this.leftChild(index) && 
		(this.leftChild(index) > this.items[index] || 
		this.rightChild(index) > this.items[index] ) ) {
		let biggerIndex = this.leftChildIndex(index);

		if(this.rightChild(index) && 
			this.rightChild(index) > this.items[biggerIndex]) {
			biggerIndex = this.rightChildIndex(index);
		}

		this.swap(biggerIndex, index);

		index = biggerIndex;
	}
}

MaxHeap.prototype.bubbleUp = function() {
	let index = this.items.length - 1; 

	while(this.parent(index) && this.parent(index) <  this.items[index]) {
		this.swap(this.parentIndex(index), index); 
		index = this.parentIndex(index);

	}
}

let mh2 = new MaxHeap();
mh2.add(1);
mh2.add(10);
mh2.add(5);
mh2.add(100);
mh2.add(8);

console.log(mh2.poll());	//100
console.log(mh2.poll());	// 10
console.log(mh2.poll());	// 8
console.log(mh2.poll());	// 5
console.log(mh2.poll());	//1

 
