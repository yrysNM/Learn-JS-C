var hasPathSum = function(root, targetSum) {
	let queue = [];
	let queueSum = []; 

	queue.push(root);
	queueSum.push(targetSum - root.val);


	let leftSum = root.val,
		rightVal = root.val,
		sum = root.val;

	while(queue.length){
		//let temp = queue.shift();

		for(let i =0; i< queue.length; i++) {
			let temp = queue.shift();
			let curSum = queueSum.shift(0); 

			if(!temp.left && !temp.right && curSum == 0) return true;

			if(temp.left) {
				queue.push(temp.left);

				queueSum.push(curSum - temp.left.val);
			}

			if(temp.right) {
				queue.push(temp.right);

				queueSum.push(curSum - temp.right.val);
			}
		}
	}
	return false;
};



let node1 = {
	val: 5,
	left: {
		val: 4,
		left: {
			val: 11,
			left: {
				val: 7
			},
			right: {
				val: 2
			}
		},
		right: {
			val: null
		}
	},
	right: {
		val: 8,
		left: {
			val: 13,
			left:{
				val: null
			},
			right:{
				val: null
			}
		},
		right: {
			val: 4,
			left: {
				val: null
			},
			right: {
				val: 1
			}
		}
	}
};

let node2 = {
	val: 1,
	left: {
		val: 2
	},
	right: {
		val: 3
	}
};

console.log(hasPathSum(node1, 22));