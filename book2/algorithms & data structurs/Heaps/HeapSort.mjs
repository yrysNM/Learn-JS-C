import MinHeap from "./Min_Heap.mjs";
import MaxHeap from "./MaxHeap.mjs";

/* Ascending-Order Sort (Min-Heap */
let minHeapExample = new  MinHeap();
minHeapExample.add(12);
minHeapExample.add(2);
minHeapExample.add(23);
minHeapExample.add(4);
minHeapExample.add(13);
console.log(minHeapExample.items);   // [2, 4, 23, 12, 13]

console.log(minHeapExample.poll());  // 2
console.log(minHeapExample.poll());  // 4
console.log(minHeapExample.poll());  // 12
console.log(minHeapExample.poll());  // 13
console.log(minHeapExample.poll());  // 23



/* Descending-Order Sort (Max-Heap) */
let maxHeapExample = new  MaxHeap(); 
maxHeapExample.add(12);
maxHeapExample.add(2);
maxHeapExample.add(23);
maxHeapExample.add(4);
maxHeapExample.add(13);
console.log(maxHeapExample.items);   // [23, 13, 12, 2, 4]

console.log(maxHeapExample.poll());	// 23
console.log(maxHeapExample.poll()); // 13
console.log(maxHeapExample.poll()); // 12
console.log(maxHeapExample.poll()); // 2
console.log(maxHeapExample.poll()); // 4
