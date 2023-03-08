/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    let tree = new TreeNode();
    
    if(!root1) return root2;
    if(!root2) return root1;
    
    root1.val += root2.val; 
    root1.left= mergeTrees(root1.left, root2.left); 
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
    //tree.val = root1.val + root2.val; 
    
//     let queueRoot1 = []; queueRoot1.push(root1);
//     let queueRoot2 = []; queueRoot2.push(root2);
    
    
//     if(!root1 || !root2) 
//         return null;
    
    
//         while(queueRoot1.length && queueRoot2.length) {
//         let tempRoot1 = queueRoot1.shift(); 
//         let tempRoot2 = queueRoot2.shift(); 
        
        
//         if(tempRoot1.left && tempRoot2.left){
//             queueRoot1.push(tempRoot1.left);
//             queueRoot2.push(tempRoot2.left);
//             tree.left.val = tempRoot1.left + tempRoot2.left;
//         }
        
//         if(tempRoot2.right && tempRoot1.right) {
//             queueRoot2.push(tempRoot2.right); 
//             queueRoot1.push(tempRoot1.right);
//         }
//     }
    
    console.log(tree);
}