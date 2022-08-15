import { SinglyLinkedListNode,  SinglyLinkedList} from './SinglyLinkedList.mjs';

let sll1 = new SinglyLinkedList();
sll1.insert(4);							// => linked list is  now 1 -> null
sll1.insert(2);						// =>  12 -> 1 -> null
sll1.insert(1);
sll1.insert(3);	


let currentHead= sll1.head;

var sortList = function(head) {
        let currentHead = head;
        let newListNode;  
        let sortArr = [];
    
    while(currentHead.next) {
       // console.log(currentHead.data);
        sortArr.push(currentHead.data);
        currentHead = currentHead.next;
    }
    
    sortArr.sort((a, b) => a - b);
    
    let list = new SinglyLinkedListNode(sortArr[0]);

    let temp = list;
    for(let i = 1; i < sortArr.length; i++)
    {
        temp.next = new SinglyLinkedListNode(sortArr[i]);
        temp = temp.next;
    } 
    
   
    return list;		//Time complexity: O(2n)
    
};

console.log(sortList(currentHead));



//need sort Time compexity: O(nlogn)
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var getMid = (h) => {
    if(h == null || h.next == null) {
        return h;
    }
    let slow = h;
    let first = h;
    while(first.next !== null && first.next.next !== null ) {
        slow = slow.next;
        first = first.next.next;
    }
    return slow;
}
var mergeSort = (a,b) => {
    var result = null;
    if(a == null) {
        return b;
    } 
    if(b == null) {
        return a;
    }
    if(a.val<b.val) {
        result = a;
        result.next = mergeSort(a.next,b)
    }else {
        result = b;
        result.next = mergeSort(a,b.next)
    }
    return result;
}
var sortList = function(head) {
    if(head == null || head.next == null) {
        return head;
    }
    //debugger;
    let mid = getMid(head);
    let midNext = mid.next;
    mid.next = null;
    var left = sortList(head);
    var right = sortList(midNext);
    //debugger;
    var sortedlist = mergeSort(left, right);
    return sortedlist;
};