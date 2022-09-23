 export class DoubleLinkedListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = 0;
	}

}

export class DoubleLinkedList {
	constructor() {
		this.head  = null; 
		this.tail = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size == 0;
	}

	insertAtHead(value) {
		if(this.head  == null) {		// if first node
			this.head = new DoubleLinkedListNode(value);
			this.tail = this.head;
		}else {
			let temp = new  DoubleLinkedListNode(value);
			temp.next = this.head; 
			this.head.prev = temp; 
			this.head = temp;
		}
		this.size++;
	}

	insertAtTail(value) {
		if(this.tail === null) {
			this.tail = new DoubleLinkedListNode(value);
			this.head = this.tail;
		}else {
			let temp = new DoubleLinkedListNode(value);
			temp.prev = this.tail;
			this.tail.next= temp; 
			this.tail = temp;
		}

		this.size++;			//time complexity: O(1)
	}

	deleteAtHead() {
		let toReturn = null; 

		if(this.head !== null) {
			toReturn = this.head.data; 

			if(this.tail == this.head) {
				this.head = null; 
				this.tail = null;
			}else {
				this.head = this.head.next;
				this.head.prev = null;
			}
		}
		this.size--;
		return toReturn;
	}

	deleteAtTail() {
		let toReturn = null; 

		if(this.tail !== null) {
			toReturn = this.tail.data; 

			if(this.tail == this.head) {
				this.head= null; 
				this.tail = null;
			}else {
				this.tail = this.tail.prev;
				this.tail.next = null;
			}
		}

		this.size--;
		return toReturn;
	}

	findStartingHead(value) {
		let currentHead = this.head; 

		while(currentHead.next) {
			if(currentHead.data == value) {
				return true;
			}

			currentHead = currentHead.next;
		}

		return false;				// Time complexity: O(n)
	}

	findStartingTail(value) {
		let currentTail = this.tail;

		while(currentTail.prev) {
			if(currentTail.data == value) {
				return true;
			}
			currentTail = currentTail.prev;
		}

		return false;
	}
}

let dll1 = new DoubleLinkedList();
dll1.insertAtHead(10);				// =>  ddl1's structure: tail: 10 head: 10
dll1.insertAtHead(12);				// => / ddl1's structure: tail: 10 head: 12
dll1.insertAtHead(20);				// => / ddl1's structure: tail: 10 head: 20
dll1.insertAtTail(33);				// => / ddl1's structure: tail: 33 head: 20
dll1.insertAtTail(30);				// => / ddl1's structure: tail: 30 head: 33
dll1.deleteAtTail();			
/* console.log(dll1.findStartingHead(10)); 	// => true	
console.log(dll1.findStartingTail(100));	// => false
console.log(dll1); */