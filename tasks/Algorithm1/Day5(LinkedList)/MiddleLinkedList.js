/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let left = head; 
    let right = null;
    let fast = head;
    
    while(fast.next != null && fast.next.next != null) {
        right = left;
        left = left.next; 
        fast = fast.next.next;l 
    }
    
    let mid = new ListNode();
    if(fast.next == null) {
        mid = left;
    }else {
        right = left;
        mid = left.next;
    }
    
    right.next = null; 
    return mid;
};