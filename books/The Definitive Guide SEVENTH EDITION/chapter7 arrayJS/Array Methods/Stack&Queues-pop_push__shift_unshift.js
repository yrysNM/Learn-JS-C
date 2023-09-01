//a first-in, last-out stack
let stack = []; 
console.log(stack.push(1, 2));  // stack == [1, 2]
console.log(stack.pop()); 		// stack == [1] return 2 
console.log(stack.push(3)); 	// stack == [1, 3]
console.log(stack.pop());  		// stack == [1] return 3
console.log(stack.push([4, 5]));// stack == [1, [4, 5]]
console.log(stack.pop());		// stack == [1] retutns [4,  5]
console.log(stack.pop()); 		// stack == []; return 1     

console.log("----------------------------------------");

//first-in , first-out
let q = [];

q.push(1, 2); 					// q == [1,  2]
console.log(q);
console.log(q.shift()); 		// q == [2] returns 1
console.log(q.push(3));			// q == [2, 3]
console.log(q.shift());			// q == [3] return 2
console.log(q.shift());			// q == [] return 3

let a = [];
console.log("unshift:" + a.unshift(1) + "; values~" + a);		 // a == [1]
console.log("unshift:" + a.unshift(2) + "; values~" + a);		 // a == [1, 2]
a = []; 														 // a == []
console.log("unshift:" + a.unshift(1, 2) + "; values~" + a);	 // a == [1, 2]