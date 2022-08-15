"use strict";

import Stack from "./Stack2.mjs";

function sortableStack(size) {
	this.size= size; 

	this.mainStack = new Stack();
	this.sortedStack = new Stack();

	//let's initialze it with some random ints
	for(let i = 0;i< this.size;i++) {
		this.mainStack.push(Math.floor(Math.random() * 11));
	}
	
} 
sortableStack.prototype.sortStackDescending = function() {
	while(!this.mainStack.isEmpty()) {
		let temp= this.mainStack.pop();
		while(!this.sortedStack.isEmpty() && this.sortedStack.peek() < temp) {
			this.mainStack.push(this.sortedStack.pop());

		} 

		this. sortedStack.push(temp);
	}

}									// Time Complexity: O(n^2)

let ss = new sortableStack(10);
console.log(ss);					// => 
/* 
sortableStack {
  size: 10,
  mainStack: Stack { array: [
      10, 6, 0,  9, 6,
       7, 6, 7, 10, 8
    ] },
  sortedStack: Stack { array: [] }
} */


ss.sortStackDescending();
console.log(ss.sortedStack);		// => 

/* Stack { array: [
    10, 10, 9, 8, 7,
     7,  6, 6, 6, 0
  ] } */