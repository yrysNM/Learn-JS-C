function TreeNode(value) {
	this.value = value; 
	this.children = [];

}

function BinaryTreeNode(value) {
	this.value = value;
	this.left = null; 
	this.right = null;
}

function BinaryTree() {
	this._root = null;
}



/*------------------------ 	TREE TRAVERSAL ----------------------------  */

//Pre order recursion base when nod  null
BinaryTree.prototype.traversePreOrder = function(){
	traversePreOrderHelper(this._root);

	function traversePreOrderHelper(node) {
		if(!node) {
			return;
		}

		console.log(node.value);
		traversePreOrderHelper(node.left);
		traversePreOrderHelper(node.right);

	}
}

/* This can also be done iteratively, but it is harder to implement */
BinaryTree.prototype.traversePreOrderIterative = function(value) {
	//create an empty stack and push root to it
	let nodeStack = []; 
	nodeStack.push(this._root);


	//pop all items one by one.DO following for every popped item 
	//a) print it
	//b) push its right child
	//c) push its left child
	// Node that right child is pushed first so that left
	// is processed first 
	while(nodeStack.length) {
		// # Pop the top item from stack and print it
		let node = nodeStack.pop();
		console.log(node.value);

		// # Push right and left children of the popped node tostack
		if(node.right){
			nodeStack.push(node.right);

		}

		if(node.left) {
			nodeStack.push(node.left);
		}
	}
}
//[42, 41, 10, 40, 50, 45, 75]


//In-Order Traversal
BinaryTree.prototype.traverseInOrder = function() {
	traverseInOrderHelper(this._root);

	function traverseInOrderHelper(node) {
		if(!node) {
			return;
		}

		traverseInOrderHelper(node.left);
		console.log(node.value);
		traverseInOrderHelper(node.right);
	}
}

BinaryTree.prototype.traverseInOrderIterative = function() {
	let current = this._root; 
	let s = [], 
	done = false; 

	while(!done) {
		//Reach the left most Node of the current Node
		if(current != null) {
			//Plase pointer to a tree node on the stack 
			//before traversing the node's left subtree
			s.push(current);

			current = current.left;
		}else {
			if(s.length) {
				current = s.pop();
				console.log(current.value);
				current =	current.right;
				
			}else  {
				done = true;
			}
		}
	}
}
//[10, 41, 40, 42, 45, 50, 75]



//Post-order traversal 
BinaryTree.prototype.traversePostOrder = function() {
	traversePostOrderHelper(this._root);

	function traversePostOrderHelper(node) {
		if(node.left) {
			traversePostOrderHelper(node.left);
		}

		if(node.right) {
			traversePostOrderHelper(node.right);
		}

		console.log(node.value);
	}
}

BinaryTree.prototype.traversePostOrderIterative = function() {
	//Create two stacks
	let s1 = [],
		s2 = [];

		//push rootto  first stack 
		s1.push(this._root);

		//#Run while first stack is not empty
		while(s1.length) {
			//Popan item from s1 and appedn it to s2
			let node = s1.pop();
			s2.push(node);

			//Push left and right children of removed item to s1
			if(node.left) {
				s1.push(node.left);

			}

			if(node.right) {
				s1.push(node.right);

			}
		}

	//print allelements ofsecond stack 
	while(s2.length) {
		let node = s2.pop();
		console.log(node.value);
	} 
}
//[10, 40, 41, 45, 75, 50, 42]



//Level-order traversal
BinaryTree.prototype.traverseLevelOrder = function() {
	//Breath first search 
	let root = this._root,
	queue =[];

	if(!root) {
		return;
	}

	queue.push(root);

	while(queue.length) {
		let temp= queue.shift();

		console.log(temp.value);

		if(temp.left) {
			queue.push(temp.left);
		}

		if(temp.right) {
			queue.push(temp.right);
		}
	}
}
// [42, 41, 50, 10, 40, 45, 75]

/* Time Complexity: O(n)
	The time complexity of any of these traversals is the same because each traversal 
	requires that all nodes are visited.
 */