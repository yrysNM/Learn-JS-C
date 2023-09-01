var minDepth = function(root) {
    let thisRoot = root;
    let queue = []; 
    let numbers = [];
    queue.push([thisRoot, 0]);

    
    while(queue.length){
        let tuple = queue.shift();
        let temp = tuple[0];
        let height = tuple[1];
        
        //console.log(height);
        numbers.push(height);

        findLowestCommonAncestor(root, 0, temp.val)

        if(temp.left) {
            queue.push([temp.left, height + 1]);
        }
        
        if(temp.right) {
            queue.push([temp.right, height + 1]);
        }
    }

    
   
    
    return numbers[numbers.length - 1];
};


function findLowestCommonAncestor(root, value1, value2) {
    function findLowestCommonAncestorHelper(root,value1, value2) {
        if(!root) 
            return;

        if(Math.max(value1, value2) < root.value) {
            return findLowestCommonAncestorHelper(root.left, value1, value2);

        } 

        if(Math.min(value1, value2) > root.value) {
            return findLowestCommonAncestorHelper(root, value1, value2);
        }
        return root.value;
    }

    return findLowestCommonAncestorHelper(root, value1, value2);
}


let node1 = {
    val: 2, 
    left: {
        value: null
    },
    right: {
        val: 3,
        left: {
          val: null 
        },
        right: {
            val: 4,
            left: {
                val: null
            },
            right: {
                val: 5,
                left: {
                    val: null,
                },
                right: {
                    val: 6,

                }
            }
        }
    }
};

console.log(minDepth(node1));