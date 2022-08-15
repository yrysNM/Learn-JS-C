import {SinglyLinkedListNode, SinglyLinkedList} from "./SinglyLinkedList.mjs";

//1)REverse a singly linked list
function reverseSingleLinkedList(sll) {
	let node = sll.head; 
	let prev = null; 

	while(node){
		let temp = node.next; 
		node.next = prev; 
		prev = node; 
		if(!temp) {
			break;
		}
		node = temp;
	}

	return node;			//Time Complexity: O(n)
							//Space Complexity: O(1)
}

let sll1 = new SinglyLinkedList();
sll1.insert(1);							// => linked list is  now 1 -> null
sll1.insert(12);						// =>  12 -> 1 -> null
sll1.insert(20);		

console.log(reverseSingleLinkedList(sll1));