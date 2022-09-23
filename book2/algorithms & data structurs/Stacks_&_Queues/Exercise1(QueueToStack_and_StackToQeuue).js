//1)DESIGN A STACK USING ONLY QUEUES AND THEN DESIGN A QUEUE USING ONLY STACKS
//Stack Using Queues
function Stack(array) {
	this.array = []; 
	if(array) this.array= array; 
}

Stack.prototype.getBuffer = function() {
	return this.array.slice();	
}

Stack.prototype.isEmpty = function() {
	return this.array.length == 0;
}

//instance of the stack class
let stack1 = new Stack();

// Peek
Stack.prototype.peek = function() {
	return this.array[this.array.length - 1];
}

//Insertion
Stack.prototype.push = function(value) {
	this.array.push(value);
}

//Deletion
Stack.prototype.pop = function() {
	return this.array.pop();
}

function TwoStackQueue(){
	this.inbox = new Stack();
	this.outbox = new Stack(); 
}

TwoStackQueue.prototype.enqueue = function(val) {
	this.inbox.push(val);
};

TwoStackQueue.prototype.dequeue = function() {
	if(this.outbox.isEmpty()) {
		while(!this.inbox.isEmpty()) {
			this.outbox.push(this.inbox.pop());
		}
	}


	return this.outbox.pop();
};

/* let qu = new TwoStackQueue();
qu.enqueue(1);
qu.enqueue(2);
qu.enqueue(3);
console.log(qu.dequeue());
console.log(qu); */

//Queue Using Stacks
function Queue(array) {
	this.array = []; 
	if(array) this.array = array;
}

Queue.prototype.getBuffer = function() {
	return this.array.slice();
};

Queue.prototype.isEmpty = function() {
	return this.array.length == 0;
};

Queue.prototype.enqueue  = function(value) {
	return this.array.push(value);
};

Queue.prototype.dequeue = function() {
	return this.array.shift();
};

function QueueStack() {
	this.inbox = new Queue();		//first stack
}

QueueStack.prototype.push = function(val) {
	this.inbox.enqueue(val);
};

QueueStack.prototype.pop = function() {
	let  size = this.inbox.array.length - 1;
	let counter = 0;
	let bufferQueue = new Queue();

	while(++counter <= size) {
		bufferQueue.enqueue(this.inbox.dequeue())
	}
	
	let popped = this.inbox.dequeue(); 
	this.inbox = bufferQueue;
	return popped;	
};

let st = new QueueStack();
st.push(1);
st.push(2);
st.push(13);
st.push(5);

/* console.log(st.pop());		// => 5
console.log(st.pop());		// => 13
console.log(st.pop());		// => 2
console.log(st.pop());		// => */ 