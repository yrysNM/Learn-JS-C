/* 
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]] 

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
   
    //bubbleSort
    // for(let i = 0; i < nums.length; i++){
    //     let stop = nums.length - i; 
    //     for(let j = 0; j < stop; j++){
    //         if(nums[j] > nums[j + 1]) {
    //             let temp = nums[j];
    //             nums[j] = nums[j + 1];
    //             nums[j + 1] = temp;
    //         }
    //     }
    // }
    
    
    // insertion sort
    for(let i = 1; i < nums.length; i++) {
        let  key = nums[i];
        let j = i - 1;
        
        while(j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j];
            j = j - 1;
            // or j-- or j -= 1
        }
        
        nums[j + 1] = key;
        
    }
    
    console.log(nums);
    
    let res= []; 
    for(let  i = 0; i < nums.length - 2; i++){
        
        if(i > 0 && nums[i] === nums[i -1]) continue;
        
        let j = i + 1; 
        let k = nums.length - 1; 
        
        while(j < k){
            const sum = nums[i] + nums[j] + nums[k];
            
            if(sum === 0) res.push([nums[i], nums[j], nums[k]]);
            
            if(sum >= 0) {
                k--;
                while(nums[k] === nums[k + 1]) k--;
            }
            
            if(sum <= 0){
                j++;
                while(nums[j] === nums[j - 1]) j++;
            }
        }
     
    }
    
    return res;
    
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));	// => [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
