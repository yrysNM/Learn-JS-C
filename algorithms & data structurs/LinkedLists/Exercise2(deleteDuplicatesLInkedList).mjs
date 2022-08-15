import {SinglyLinkedListNode, SinglyLinkedList} from "./SinglyLinkedList.mjs";


//delete duplicates in unsorted linkes list
function deleteDuplicateInUnsorted(sll1) {
	let track = [];

	let temp = sll1.head; 
	let prev = null;

	while(temp) {
		if(track.indexOf(temp.data) >=  0) {
			prev.next = temp.next; 
			sll1.size--;
		}else {
			track.push(temp.data);
			prev = temp;
		}

		temp = temp.next;
	}

	console.log(temp);				//Time complexity: O(n^2)
									// space complexity: O(n)
}



//delete duplicates in unsorted lnkeslsit
function deleteDuplicateInUnsortedSllBest(sll1) {
	let track = {}; 

	let temp = sll1.head; 
	let prev = null; 
	while(temp) {
		if(track[temp.data]) {
			prev.next = temp.next;
			sll1.size--;
		}else {
			track[temp.data] = true;
			prev = temp;
		}

		temp= temp.next;
	}

	console.log(temp);		//Time Complexity: O(n)
							//Space Complexity: O(n)
}


let sll1 = new SinglyLinkedList();
sll1.insert(1);							// => linked list is  now 1 -> null
sll1.insert(12);						// =>  12 -> 1 -> null
sll1.insert(20);	
sll1.insert(20);	


deleteDuplicateInUnsortedSllBest(sll1);


console.log(sll1);


