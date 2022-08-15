/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {

     let arrayKth = []; 
    let queue = []; 

    if(!root) return root;

    queue.push(root); 

    while(queue.length) {
        let size = queue.length; 


        for(let i = 0; i < size; i++) {
            let temp = queue.shift(); 

            if(i == size - 1) {
                temp.next = null;
            }else 
            {
                temp.next = queue[0];

            }

            if(temp.left) {
                queue.push(temp.left);
            }

            if(temp.right) {
                queue.push(temp.right);
            }
        }
    } 

    

    

 //  console.log(root);

   return root;
    
    //     let arrayKth = []; 
//     let queue = []; 

//     if(!root) return; 

//     queue.push([root, 0]); 

//     while(queue.length){
//         let tuple = queue.shift();
//         let temp = tuple[0];
//         let height = tuple[1];

//       //  console.log(height, temp.val, queue);
//         arrayKth.push([temp.val, height]);
//         root.next = "#";
//         if(height == 0) {
            
//             root.next = '#';
//             root.right.next= '#';
//         }

//         if(temp.left){
//             queue.push([temp.left, height + 1]); 
         
//          }

//         if(temp.right){
//             queue.push([temp.right, height + 1]);
//             root.right.next = '#';   
//         }

//     }

 //  console.log(root);
  //  return root;
};

let node1 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 5
        }
    },
    right: {
        val: 3,
        left: {
            val: 6
        },
        right: {
            val: 7
        }
    }

};


console.log(connect(node1));