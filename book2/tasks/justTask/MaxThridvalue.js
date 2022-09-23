class Heap {
	constructor(items) {
		this.items= items;
	}

	swap(index1,index2) {
		let temp = this.items[index1];
		this.items[index1] = this.items[index2];
		this.items[index2] = temp;
	}

	parentIndex(index) {
		return Math.floor((index - 1) / 2);

	}

	leftChildIndex(index) {
		return index * 2 + 1;
	}

	rightChildIndex(index) {
		return index * 2 + 2;
	}

	parent(index) {
		return this.items[this.parentIndex(index)];

	}

	leftChild(index) {
		return this.items[this.leftChildIndex(index)]; 
	}

	rightChild(index) {
		return this.items[this.rightChildIndex(index)];
	}

	peek(item) {
		return this.items[0];
	}

	size() {
		return this.items.length;
	}
}

class MaxHeap extends Heap{
	constructor(items) {
		super(items);
		this.items = [];
	}

	add(item) {
		this.items[this.items.length] = item; 
		this.bubbleUp();
	}

	poll() {
		let item = this.items[0];

		this.items[0] = this.items[this.items.length - 1];
		this.items.pop();
		this.bubbleDown();

		return item;
	}

	bubbleDown() {
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

	bubbleUp() {
		let index  = this.items.length - 1;

		while(this.parent(index) && this.parent(index) < this.items[index]) {
			this.swap(this.parentIndex(index), index);

			index = this.parentIndex(index);
		}
	}
}



let maxH = new MaxHeap();

let nums  = new Set([1, 2]);


for(let k of nums) {
	maxH.add(k);
}

let first = maxH.poll(); 

if(nums.size < 3) {
	console.log(first);
}

maxH.poll(); 
console.log(maxH.poll());