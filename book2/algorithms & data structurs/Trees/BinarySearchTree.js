function BinarySearchTree() {
	this._root = null;
}

//Insertion
BinarySearchTree.prototype.insert = function(value) {
	let thisNode = {
		left: null, 
		right: null, 
		value: value,
	};

	if(!this._root) {
		this._root= thisNode;
	}else {
		//loop traverse util
		let currentRoot = this._root;

		while(true) {
			if(currentRoot.value > value) {
				//let's increament if it's not a null and insert if it is a null

				if(currentRoot.left != null) {
					currentRoot = currentRoot.left;

				}else {
					currentRoot.left = thisNode;
					break;
				}
			}else if(currentRoot.value < value) {
				//if bigger than current put it on the right
				// left's increment if it's not a null and insert if it
				// is a null
				if(currentRoot.right != null) {
					currentRoot = currentRoot.right;
				}else {
					currentRoot.right = thisNode;
					break;
				}
			}else {
				// case that both are same 
				break;
			}
		}
	}
}

/*  Time Complexity (for balanced trees): O(log2(n))
	Time Complexity (for unbalanced trees): O(n) 
*/


//Deletion
BinarySearchTree.prototype.remove = function(value) {
	return deleteRecursively(this._root, value);

	function deleteRecursively(root, value) {
		if(!root) {
			return null;
		}else if(value < root.value) {
			root.left = deleteRecursively(root.left, value);
		}else if(value> root.value) {
			root.right =deleteRecursively(root.right, value);
		}else {
			//no child
			if(!root.left && !root.right) {
				return null; 		//case 1

			}else if(!root.left) {	//case 2
				root = root.right;
				return root;
			}else if(!root.right) {	// case 2
				root = root.left;
				return root;
			}else {					// case 3
				let temp = findMin(root.right);
				root.value = temp.value; 
				root.right = deleteRecursively(root.right, temp.value);
				return root;
			}
		}
	}
	return root; 

}

function findMin(root) {
	while(root.left) {
		root = root.left;
	}

	return  root;
}

/* Time Complexity (for balanced tree): O(log2(n))
   Time Complexity (for unbalanced trees): O(n)
 */

 BinarySearchTree.prototype.findNode = function(value) {
 	let  currentRoot = this._root; 
 	let found = false;

 	while(currentRoot) {
 		if(currentRoot.value > value) {
 			currentRoot = currentRoot.left;
 		}else if(currentRoot.value < value) {
 			currentRoot = currentRoot.right;
 		}else  {
 			//we've found thenode 
 			found = true;
 			break;
 		}
 	}

 	return found;
 	/* Time Complexity (for balanced tree): O(log2(n))
	Time Complexity (for unbalanced trees): O(n) */
 }


 let bst1 = new BinarySearchTree();
 bst1.insert(1);
 bst1.insert(3);
 bst1.insert(2);
 console.log(bst1.findNode(3)); 	// => true
 console.log(bst1.findNode(5));		// => false
console.log(bst1._root);			// =>

 /* 
 {
  left: null,
  right: {
    left: { left: null, right: null, value: 2 },
    right: null,
    value: 3
  },
  value: 1
} 
ex:
	1
	  \
		3
	  /
	 2 
 */