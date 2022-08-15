/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = head; 
    let arr = [];
    while(node) {
        arr.push(node.val);
        node = node.next;
    }
    arr.splice(-n, 1);
    console.log(arr);
    if(arr[0] == null) {
        return null;
    }
   // console.log(arr.splice(-n, 1));
    let list = new ListNode(arr[0]);
    let selectedNode = list;
    for(let i = 1; i < arr.length; i++) {
        selectedNode.next = new ListNode(arr[i]);
        selectedNode = selectedNode.next;  
    }
   return list;
};