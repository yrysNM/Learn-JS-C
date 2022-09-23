
class Queue {
	constructor(array) {
		this.array = [];
		if(array) this.array= array;
	}

	getBuffer() {
		return this.array.slice();
	}

	isEmpty() {
		return this.array.length == 0;
	}

	//peek
	peek() {
		return this.array[0];		
	}

	//insertion
	enqueue(value) {
	return this.array.push(value);

	}

	//deletion
	dequeue() {
		return this.array.shift();
	}



}

//instance of the queue class
let queue1 = new Queue();  //Time complexity: o(n) Because the shift() implementation removes the element at zero indexes and 

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

console.log(queue1);		// => Queue { array: [ 1, 2, 3 ] }

queue1.dequeue();
console.log(queue1);		// => Queue { array: [ 2, 3 ] }

queue1.dequeue();
console.log(queue1);		// => Queue { array: [ 3 ] }

queue1.dequeue();
console.log(queue1);	


//Access
function queueAccessNthTopNode(queue, n) {
	let bufferArray= queue.getBuffer();
	if(n <= 0) throw "error";

	let bufferQueue = new Queue(bufferArray);

	while(--n !== 0) {
		bufferQueue.dequeue();
	}

	return bufferQueue.dequeue();		//=> Time Complexity: O(n)
}



function queueSearch(queue, element) {
	let bufferArray= queue.getBuffer();

	let bufferQueue = new Queue(bufferArray);

	while(!bufferQueue.isEmpty()) {
		if(bufferQueue.dequeue() == element) {
			return true;
		}
	}

	return false;
}

for(let i = 1; i < 4;i++) {
	queue1.enqueue(i);
}
console.log(queueAccessNthTopNode(queue1, 3), queue1);		// => 	2
console.log(queueSearch(queue1, 4));				// => false