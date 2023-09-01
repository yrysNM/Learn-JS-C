
function pathSum(root, targetSum) {

    let nodeStack = [],
        leftChild = [],
        rightChild = []; 
        
    let depthLeft = 0, 
        depthRight = 0;
    
      leftChild.push(root.left);
      rightChild.push(root.right);
    
    nodeStack.push(root);
    let lengthNode = 0;
    
    let checkBalance = false;
   //   console.log( rightChild[0].left, leftChild[0].right);
    while(leftChild.length) {
        let node = leftChild.pop();
        if(node) {
        //  depthLeft += 1;
            
            if(node.right || node.left){
                depthLeft += 1;
                
            }
            
            if(node.right) {
                leftChild.push(node.right);
                 

            }

            if(node.left) {
                leftChild.push(node.left);
                

            }
            
        }else {
           depthLeft = -1;
        }
        
        
    }
   
     while(rightChild.length) {
        let node = rightChild.pop();
        if(node) {
            
          // depthRight += 1;
            if(node.right || node.left){
                depthRight += 1;
            }
            if(node.right) {
                rightChild.push(node.right);
               //  depthRight += 1;

            }

            if(node.left) {
                rightChild.push(node.left);
              //   depthLeft += 1;

            } 
            

            
            
        }else {
            depthRight = -1;
        }
    }
    

    console.log( depthLeft, depthRight, rightChild, leftChild);

    // if(depthLeft + 1 == depthRight) {
    //     checkBalance = true;
    // }
    // 
    // if(depthLeft == depthRight + 1) {
    //     checkBalance = true;
    // }
    // 
    // if(depthLeft == 0 && depthRight == 0) {
    //     checkBalance = true;
    // }
    
    
   
    

    
    return checkBalance;
    
}

    