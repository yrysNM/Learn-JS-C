export default function Stack(array) {
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

//Access
function stackAccessNthTopNode(stack, n) {
	let bufferArray = stack.getBuffer();
	if(n <= 0) throw "error";
	let bufferStack = new Stack(bufferArray);

	while(--n !== 0) {
		bufferStack.pop();
	}
	return bufferStack.pop();		// Time complexity: o(n)
}

//Search
function stackSearch(stack, element) {
	let bufferArray= stack.getBuffer();

	let bufferStack = new Stack(bufferArray);		//copy into buffer

	while(!bufferStack.isEmpty()) {
		if(bufferStack.pop() == element) {
			return true;
		}
	}
	return false;
}





/* stack1.push(10);
console.log(stack1.peek());		// => 10
stack1.push(5);
console.log(stack1.peek());		// => 5		Time complexity: o(1)
console.log(stack1); */

stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1);	// => Stack { array: [ 1, 2, 3 ] }

stack1.pop(1);
stack1.pop(2);
stack1.pop(3);			// => Stack { array: [] }
console.log(stack1);

let stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
console.log(stackAccessNthTopNode(stack2, 2));	// => 2
console.log(stackSearch(stack2, 4));			// => false;