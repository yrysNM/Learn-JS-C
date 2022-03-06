export  class SinglyLinkedListNode {
	constructor(data) {
		this.data= data; 
		this.next = null;
	}
}

export  class SinglyLinkedList {
	constructor() {
		this.head = null; 
		this.size =0;
	}

	isEmpty() {
		return this.size == 0;
	}

	insert(value) {
		if(this.head == null) {		//if first node
			this.head = new SinglyLinkedListNode(value);
		}else {
			let temp= this.head;
			this.head = new SinglyLinkedListNode(value);
			this.head.next = temp;
		}
		this.size++;
	}

	remove(value)  {
		let currentHead = this.head;

		if(currentHead.data == value) {
			//just shift the head over.Head is  now this new value
			this.head = currentHead.next; 
			this.size--;
		} else {
			var prev = currentHead; 
			while(currentHead.data  == value) {
				//remove by skipping
				prev.next = currentHead.next; 
				prev = currentHead; 
				currentHead= currentHead.next; 
				break;	//broke out of  loop
			}
			prev = currentHead;
			currentHead = currentHead.next;
		}	

		//if  wasn't in the middle or head nust be tail
		if(currentHead.data == value) {
			prev.next = null;
		}

		this.size--;
	}

	deletedAtHead() {
		let toReturn = null; 

		if(this.head !== null) {
			toReturn = this.head.data;

			if(this.tail === this.head) {
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

	find(value) {
		let currentHead = this.head;
		while(currentHeda.next) {
			if(currrentHead.data == value) {
				return true;
			}

			currentHead = currentHead.next;
		}

		return false;		// Time complexity: o(n)
	}
}


 let sll1 = new SinglyLinkedList();
sll1.insert(1);							// => linked list is  now 1 -> null
sll1.insert(12);						// =>  12 -> 1 -> null
sll1.insert(20);						// => 20 ->  12 -> 1 -> null
//sll1.remove(12);						// => 20 -> 1 -> null
//console.log(sll1.head);
sll1.deletedAtHead();					// => 12 -> 1 -> null

//console.log(sll1);

