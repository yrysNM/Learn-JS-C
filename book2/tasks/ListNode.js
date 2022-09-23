class ListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null){
		this.head = head;
	}

	size() {
		let count = 0;
		let node = this.head; 

		while(node) {
			count++; 
			node = node.next;
		}

		return count;
	}

	clear() {
		this.head = null;
	}

	getLast() {
		let lastNode= this.head; 
		if(lastNode) {
			while(lastNode.next){
				lastNode = lastNode.next;
			}
		}

		return lastNode;
	}

	getFirst() {
		return this.head;
	}
}

//function  to return the length
function findLength(head) {
	let curr = head; 
	let cnt = 0;
	while(curr != null){
		cnt++; 
		curr = curr.next;

	}

	return cnt;
}

// Function to convert the
// Linked List to an array
function convertArr(head){
	let len = findLength(head);

	let arr = new Array(len);

	let index = 0;
	let curr = head;


	while(curr != null){
		arr[index++] = curr.data; 
		curr = curr.next
	}

	return arr;
}

//function to add a new node 
function add(data){
	let newNode= new ListNode();
	newNode.data = data; 
	newnode.next = null; 
	return newnode;

}


//driver code
let node1 =new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(6);
let node4 = new ListNode(3);
let node5 = new ListNode(8);


node1.next = node2; 
node1.next.next = node3;
node1.next.next.next = node4;
node1.next.next.next.next = node5;

let list = new LinkedList(node1);
console.log(list );
console.log(list.head.next.data);		// => 5 
console.log(convertArr(node1));			// => [ 2, 5, 6, 3, 8 ]

console.log(convertArr(node1).sort()); // => [ 2, 3, 5, 6, 8 ]


/* function linkedList(arr){
  return arr.reduceRight((next, value) => ({value, next}), null);
}

l = [3, 1, 2, 3, 4, 5];

console.log(linkedList(l));


let list = new ListNode(arr[0]);
  
  let selectedNode = list;
  for(let i = 1; i < arr.length; i++){
    selectedNode.next = new ListNode(arr[i]);
    selectedNode = selectedNode.next
  } 

  return list */