function printKthLevels(root, k) {
	let arrayKth = [];
	let queue =[];

	if(!root) return;

	//Breath frist search for tree
	queue.push([root, 0]);

	while(queue.length) {
		let tuple= queue.shift();
		let temp = tuple[0];
		let height = tuple[1];

		if(height == k) {
			arrayKth.push(temp.value);
		}

		if(temp.left) {
			queue.push([temp.left, height + 1]);
		}

		if(temp.right) {
			queue.push([temp.right, height + 1]);
		}
	}

	console.log(arrayKth);

}


let node1 = {
	value: 1,
	left: {
		value: 0
	},
	right:{
		value: 2
	}
};

let node2 = {
	vlaue: 1, 
	left:{
		value: 0,
		left: {
			value: -1
		},
		right: {
			value: 0.5
		}
	}, 
	right: {
		value: 2
	}
};

let node3 = {
	value: 1, 
	left: {
		value: 0
	},
	right: {
		value: 2, 
		left: {
			value: 1.5
		},
		right: {
			value: 3, 
			left: {
				value: 3.25
			}
		}
	}
}

printKthLevels(node1, 1);		// 1
printKthLevels(node1, 2);		// [0, 2]