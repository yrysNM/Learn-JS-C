/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
class ListNode {
	constructor(val) {
		this.val = val; 
		this.next = null;
	}
}

let head = null;


//method1 wiht last 
var rotateRight = function(k) {
     if (k == 0)
            return;
 
        var current = head;
 
        // Traverse till the end.
        while (current.next != null)
            current = current.next;
 
        current.next = head;
        current = head;
 
        // traverse the linked list
        // to k-1 position which
        // will be last element for rotated array.
        for (i = 0; i < k - 1; i++)
            current = current.next;
 
        // update the head_ref and last
        // element pointer to null
        head = current.next;
        current.next = null;

};

//roateLeft
function rotate(k) {
	let current = head;

	let count = 1; 

	while(count < k && current != null) {
		current = current.next; 

		count++;
	}

	if(current == null) {
		return;
	}

	let kthNode = current; 

	while(current.next  != null) {
		current = current.next; 

		current.next = head; 

		head = kthNode.next; 

		kthNode.next = null;
	}
}


function push(new_data) {

    /* allocate node */
    var new_node = new ListNode();

    /* put in the data */
    new_node.val = new_data;

    /* link the old list off the new node */
    new_node.next = head;

    /* move the head to point to the new node */
    head = new_node;

}

    function printList( node) {
        while (node != null) {
         	console.log(node.val + " ");
            node = node.next;
        }
    }

push(0);
push(1);
push(2);
printList(head);
console.log(rotateRight(4));
printList(head);
console.log(rotate(4));
printList(head);
//console.log(listNode);