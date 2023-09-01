 function LFUNode(key, value) {
	this.prev= null; 
	this.next  = null;
	this.key = key;
	this.data = value; 
	this.freqCount = 1;
}

function LFUDoublyLinkedList() {
	this.head = new LFUNode('buffer head', null);
	this.tail = new LFUNode('buffer tail', null);
	this.head.next = this.tail; 
	this.tail.prev= this.head; 
	this.size = 0; 
}

function LFUCache(capacity) {
	this.keys = {}; 			// stores LFUNode
	this.freq = {}; 			// stores LFUDoublyLinke List
	this.minFreg = 0;
	this.size = 0;
}

LFUDoublyLinkedList.prototype.insertAtHead = function(node) {
	node.next = this.head.next; 
	this.head.next.prev = node; 
	this.head.next = node; 
	node.prev = this.head; 
	this.size++;
}

LFUDoublyLinkedList.prototype.removeAtTail = function(){
	let oldTail = this.tail.prev;
	let prev = this.tail.prev; 
	prev.prev.next = this.tail; 
	this.tail.prev = prev.prev; 
	this.size--; 
	return oldTail;
}

LFUDoublyLinkedList.prototype.removeNode = function(node) {
	node.prev.next = node.next; 
	node.next.prev = node.prev; 
	this.size--;
}

LFUCache.prototype.set = function(key, value) {
	let node = this.keys[key];

	if(node == undefined) {
		node = new LFUNode(key, value);

		this.keys[key] = node; 

		if(this.size != this.capacity) {
			//insert without deleting 
			if(this.freq[1] == undefined)  {
 				this.freq[1] = new LFUDoublyLinkedList();
 			}

 			this.freq[1].insertAtHead(node);
 			this.size++;
		}else {
			//delete and insert 
			let oldTail= this.freq[this.minFreq].removeAtTail();
			delete this.keys[oldTail.key];

			if(this.freq[1] == undefined){
			 	this.freq[1] = new LFUDoublyLinkedList();
			} 

			this.freq[1].insertAtHead(node);
			
			/* if(oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount].size == 0) 
			{
				this.minFreq++;
			} */
		}
		this.minFreq = 1;
	}else {
		let oldFreqCount = node.freqCount; 
		node.data = value;
		node.freqCount++;

		this.freq[oldFreqCount].removeNode(node);

		if(this.freq[node.freqCount] == undefined) {
			this.freq[node.freqCount] = new LFUDoubleLinkedList();
		}

		this.freq[node.freqCount].insertAtHead(node);

		if(oldFreqCount == this.inFreq && Object.keys(this.freq[oldFreqCount].size == 0)) {
			this.minFreq++;
		}
	}
}

LFUCache.prototype.get = function(key) {
	let node = this.keys[key];

	if(node == undefined) {
		return null;
	}else {
		let oldFreqCount = node.freqCount;
		node.freqCount++;


		this.freq[oldFreqCount].removeNode(node);


		if(this.freq[node.freqCount] ==  undefined) {
			this.freq[node.freqCount] = new LFUDoublyLinkedList();
		}


		this.freq[node.freqCount].insertAtHead(node);

		if(oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount].length == 0)) {
			this.minFreq++;
		}

		return node.data;
	}
} 

let myLFU = new LFUCache(5);
myLFU.set(1, 1);
myLFU.set(2, 2);
myLFU.set(3, 3);
myLFU.set(4, 4);
myLFU.set(5, 5);

console.log(myLFU.get(1));		// => / returns 1, state of myLFU.freq: {1: 5<->4<->3<->2, 2: 1}
myLFU.get(1);
myLFU.get(1);
myLFU.set(6, 6); 				// => // state of myLFU.freq: {1: 6<->5<->4<->3, 4: 1}

console.log(myLFU);				 => 

/* LFUCache {
  keys: {
    '1': LFUNode {
      prev: [LFUNode],
      next: [LFUNode],
      key: 1,
      data: 1,
      freqCount: 4
    },
    '2': LFUNode {
      prev: [LFUNode],
      next: [LFUNode],
      key: 2,
      data: 2,
      freqCount: 1
    },
    '3': LFUNode {
      prev: [LFUNode],
      next: [LFUNode],
      key: 3,
      data: 3,
      freqCount: 1
    },
    '4': LFUNode {
      prev: [LFUNode],
      next: [LFUNode],
      key: 4,
      data: 4,
      freqCount: 1
    },
    '5': LFUNode {
      prev: [LFUNode],
      next: [LFUNode],
      key: 5,
      data: 5,
      freqCount: 1
    },
    '6': LFUNode {
      prev: [LFUNode],
      next: [LFUNode],
      key: 6,
      data: 6,
      freqCount: 1
    }
  },
  freq: {
    '1': LFUDoublyLinkedList { head: [LFUNode], tail: [LFUNode], size: 5 },
    '2': LFUDoublyLinkedList { head: [LFUNode], tail: [LFUNode], size: 0 },
    '3': LFUDoublyLinkedList { head: [LFUNode], tail: [LFUNode], size: 0 },
    '4': LFUDoublyLinkedList { head: [LFUNode], tail: [LFUNode], size: 1 }
  },
  minFreg: 0,
  size: 6,
  minFreq: 1
}
[Finished in 0.5s]/ */