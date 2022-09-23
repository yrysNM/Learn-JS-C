let res;

function binaryTreePath(root) {
	res = [];
	dfs(root, " ");

	return res;
}

function dfs(root, path) {
	if(root == null) {
		return;
	}

	path = path + String(root.val);

	if(root.left == null && root.right == null) {
		res.push(path);
	}else {
		path = path + '->';
		dfs(root.left, path);
		dfs(root.right, path);
	}

}

let node2 = {
	val: 3, 
	left: {
		val: 9, 
		left: {
			val: 20
		},

		right: {
			val: bnulll
		}
	},
	right: {
		val:2
	}
}

console.log(binaryTreePath(node2));