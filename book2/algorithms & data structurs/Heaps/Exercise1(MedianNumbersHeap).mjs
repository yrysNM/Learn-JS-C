import MaxHeap from './MaxHeap.mjs';

/* calss Heap */
class Heap{
	constructor(items) {
		this.items = [];
	}

	swap(index1, index2) {
		let temp= this.items[index1];
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


/* Min Heap  */
class MinHeap extends Heap {
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
				this.leftChild(index) < this.items[index]) {
			let smallerIndex = this.leftChildIndex(index);

			if(this.rightChild(index) && 
					this.rightChild(index) < this.items[smallerIndex]) {
				smallerIndex= this.rightChildIndex(index);
			}

			this.swap(smallerIndex, index);
			index = smallerIndex;

		}
	}

	bubbleUp() {
		let index = this.items.length - 1; 

		while(this.parent(index) && this.parent(index) > this.items[index]) {
			this.swap(this.parentIndex(index), index);
			index = this.parentIndex(index);
		}
	}
}



class MedianHeap {
	constructor() {
		this.minHeap = new MinHeap();
		this.maxHeap = new MaxHeap();
	} 

	push(value) {
		if(value > this.median()) {
			this.minHeap.add(value);
		}else {
			this.maxHeap.add(value);
		}

		//Re balancing

		if(this.minHeap.size() - this.maxHeap.size() > 1) {
			this.maxHeap.add(this.minHeap.poll());
		}

		if(this.maxHeap.size() - this.minHeap.size() > 1) 
		{
			this.minHeap.add(this.maxHeap.poll());
		}
	}

	median() {
		if(this.minHeap.size() == 0 && this.maxHeap.size() == 0) {
			return Number.NEGATIVE_INFINITY;
		}else if(this.minHeap.size() == this.maxHeap.size()) {
			return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
		}else if(this.minHeap.size() > this.maxHeap.size()) {
			return this.minHeap.peek();
		}else {
			return this.maxHeap.peek();
		}
	}
}

 

let medianH = new MedianHeap();

medianH.push(12);	
console.log(medianH.median()); // => 12
medianH.push(2);
console.log(medianH.median()); // => 7 (becouse 12 + 2 = 14 / 2 = 7)
medianH.push(23);
console.log(medianH.median()); // => 12
medianH.push(13);
console.log(medianH.median()); // => 12.5

