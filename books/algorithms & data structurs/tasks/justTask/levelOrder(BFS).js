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
var levelOrder = function(root) {
    let queue = [];
    let thisRoot = root;
    let traverseLevel = [],
        traverseLevelL = [];
    
    let res1 = [],
        res2 = [];
    
    if(!thisRoot) {
        return [];
    }
    х-
    queue.push(thisRoot);
    //res2.push([thisRoot.val]);
    
    while(queue.length) {
       let length = queue.length;
        let traverse= [];
        for(let i = 0;i < length; i++) {
            let temp = queue.shift(); 
            
            if(temp.left) {
                queue.push(temp.left);
            }
            
            if(temp.right) {
                queue.push(temp.right);
            }
            
            traverse.push(temp.val);
        }
        
        res2.push(traverse);
        
        
    }
    
 
    console.log(traverseLevel);
    

    
    return res2;
};