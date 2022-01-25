class LinkedListNode {
	constructor(value, next = null) {
		this.value= value; 
		this.next = next;
	}

	toString() {
		return `${this.value}`
	}
}

class LinkedList {
	constructor() {
		this.head = null; 
		this.tail = null; 

	}

	append(value) {
		const newNode = new LinkedListNode(value);
	
		if(!this.head || !this.tail) {
			this.head = newNode; 
			this.tail = newNode;

			return this;
		}

		this.tail.next = newNode;

		this.tail= newNode;


		return this;
	}


	toArray() {
		let nodes = []; 

		let currentNode = this.head; 

		while(currentNode) {
			nodes.push(currentNode);

			currentNode = currentNode.next;
		}

		return nodes;
	}

	toString() {
		return this.toArray().map(node => node.toString()).toString();
	}


}


const list = new LinkedList();

list.append("a").append("b").append("c");

module.exports = {LinkedList};

console.log(JSON.stringify(list));
console.log(list.toArray());

console.log(list.toString());