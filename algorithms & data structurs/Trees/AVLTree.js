function AVLTree(value) {

	this.left = null; 
	this.right= null; 
	this.value = value;
	this.depth = 1;
}

AVLTree.prototype.setDepthBasedOnChildren = function() {
	if(this.node == null) {
		this.depth= 1;

	}

	if(this.left != null) {
		this.depth = this.left.depth + 1;

	}

	if(this.right != null && this.depth <= this.right.depth) {
		this.depth = this.right.depth + 1;
	}
}

//ROTATE LEFT
AVLTree.prototype.rotateLL = function() {
	let valueBefore =this.value; 
	let rightBefore = this.right;
	this.value= this.left.value; 

	this.right = this.left; 
	this.left = this.left.left; 
	this.right.left = this.right.right;
	this.right.right = rightBefore;
	this.right.value = valueBefore;

	this.right.setDepthBasedOnChildren();
	this.setDepthBasedOnChildren();
}

//ROTATE RIGHT
AVLTree.prototype.rotateRR = function(){
	//the right side is too long => rotate from the right
	// (__not__ rightwords)

	let valueBefore = this.value; 
	let leftBefore = this.left;
	this.value = this.right.value; 

	this.left = this.right; 
	this.right = this.right.right;
	this.left.right = this.left.left; 
	this.left.left = leftBefore; 
	this.left.value = valueBefore;

	this.left.setDepthBasedOnChildren();
	this.setDepthBasedOnChildren();

}


//Balanced for rotate childs
AVLTree.prototype.balance = function()  {
	let ldepth = this.left == null ? 0: this.left.depth;
	let rdepth = this.right == null ? 0 : this.right.depth; 

	if(ldepth > rdepth + 1) {
		//LR or LL rotation
		let lldepth = this.left.left == null ? 0 : this.left.left.depth; 
		let lrdepth= this.left.right == null ? 0: this.left.right.depth;
		

		if(lldepth < lrdepth) {
			//Lr rotation consists of a RR rotatation of the left child 
			this.left.rotateRR();
			//plus a LL rotation of this node, which happens anyway

		}

		this.rotateLL();
	}else if(ldepth + 1 < rdepth) {
		// RR or RL rotation
		let rrdepth = this.right.right == null ? 0 : this.right.right.depth; 
		let rldepth = this.right.left == null ? 0 : this.right.left.depth;

		if(rldepth > rrdepth) {
			// rr rotation consists of a ll rotation of the right child 
			this.right.rotateLL();
			// plus a RR rotation of this node, which happens anyway 
		}

		this.rotateRR();
	}

}


//insertin
AVLTree.prototype.insert = function(value) {
	let childInserted = false;

	if(value == this.value) {
		return false;				// should be all unique

	}else if(value < this.value) {
		if(this.left == null) {
			this.left = new AVLTree(value);
			childInserted = true;
		}else {
			childInserted = this.left.insert(value);
			if(childInserted == true) this.balance();
		}
	}else if(value > this.value) {
		if(this.right == null) {
			this.right = new AVLTree(value );
			childInserted = true;
		}else {
			childInserted = this.right.insert(value);

			if(childInserted == true) this.balance();
		}
	}

	if(childInserted == true) this.setDepthBasedOnChildren();
	return childInserted;
	/* 
		Time Complexity: O(nlog2(n))
		Space Complexity: O(nlog2(n))
	 */
}


//deletion
AVLTree.prototype.remove = function(value) {
	return deleteRecursively(this, value);

	function deleteRecursively(root, value) {
		if(!root) {
			return null;
		}else if(value < root.value) {
			root.left  = deleteRecursively(root.left, value);
		}else if(value > root.value) {
			root.right = deleteRecursively(root.rght, value);
		}else {
			//no child
			if(!root.left && !root.right) {			// case 1
				return null;
			}else if(!root.left) {					// case 2
				root = root.right; 
				return root;			
			}else if(!root.right) {					// case 2
				root = root.left;
				return root;
			}else {									// case 3
				let temp = findMin(root.right);
				root.value = temp.value; 
				root.right = deleteRecursively(root.right,temp.value);
				return root;
			}
		}

		root.setDepthBasedOnChildren(); 				// // ONLY DIFFERENCE from the BST one

		return root;
	}

	function findMin(root) {
		while(root.left) root = root.left; 
		return root;
		/* 
					The time complexity and space complexity are both O(nlog2(n)) because AVL trees 
					are balanced. The space complexity is from the recursive call stacks in memory.
		 */
	}
}

let avlTest = new AVLTree(1, "");
avlTest.insert(2);
avlTest.insert(3);
avlTest.insert(4);
avlTest.insert(5);
avlTest.insert(123);
avlTest.insert(203);
avlTest.insert(22222);

console.log(avlTest);