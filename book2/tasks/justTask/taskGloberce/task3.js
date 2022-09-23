const binaryTreePrint = (root) => {
    let node = root;
    let queue = [];

    if (!node) {
        return null;
    }

    queue.push(node);
    while (queue.length) {
        let temp = queue.shift();
        console.log(temp.value);
        if (temp.left) {
            queue.push(temp.left);
        }

        if (temp.right) {
            queue.push(temp.right);
        }

    }
}

const binarytree = {
    value: 2,
    left: {
        value: 3,
        right: {
            value: 5
        }
    },
    right: {
        value: 3,
        left: {
            value: 5
        }
    }
};

binaryTreePrint(binarytree);
