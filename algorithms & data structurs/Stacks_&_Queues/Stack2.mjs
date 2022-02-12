export default class Stack {
	constructor(array) {
		this.array = [];
		if(array) 
			this.array = array;
	}

	getBuffer() {
		return this.array.slice();
	}

	isEmpty() {
		return this.array.length == 0;
	}

	peek() {
		return this.array[this.array.length - 1];
	}

	push(value) {
		this.array.push(value);
	}

	pop(){
		return this.array.pop();
	}

}

function stackAccessNthTopNode(stack, n) {
	let bufferArray= stack.getBuffer();
	if(n <= 0) throw "error";

	let bufferStack = new Stack(bufferArray);

	while(--n !== 0) {
		bufferStack.pop();
	}

	return bufferStack.pop();
}


function stackSearch(stack, element) {
	let bufferArray= stakc.getBuffer();

	let bufferStack = new Stack(bufferArray);

	while(!bufferStack.isEmpty()) {
		if(bufferStack.pop() == element) {
			return true;
		}
	}
	return false;
}


let stack1= new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
//console.log(stackAccessNthTopNode(stack1, 3));