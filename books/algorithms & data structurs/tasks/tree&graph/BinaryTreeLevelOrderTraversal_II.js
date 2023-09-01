/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */


const levelOrderBottom = (root) => {
    let queue = []; 
    let  thisRoot= root; 

    let res = [];

    if(!thisRoot) {
        return[];
    }

    queue.push(thisRoot); 

    while(queue.length) {
        let length= queue.length; 

        let traverseLevel = []; 

        for(let i = 0;  i < length; i++) {
            let temp = queue.shift(); 

            if(temp.left) {
                queue.push(temp.left);
            }

            if(temp.right) {
                queue.push(temp.right);
            }

            traverseLevel.push(temp.val);
        }

        res.push(traverseLevel);
    }

    let res2; 
    res2 = res.reverse(); 

    return res2;

}; 



let node1 = {
    val: 3,
    left: {
        val: 9
    }, 
    right: {
        val: 20,
        left: {
            val: 15,
        },
        right: {
            val: 7
        }
    }
};

console.log(levelOrderBottom(node1));   // => [ [ 15, 7 ], [ 9, 20 ], [ 3 ] ]