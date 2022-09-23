/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    
    let hashMap = {}; 
    
//     let last, answer = []; 
//     let div = nums.length / 2;
//    let count = 0;
//     let checkV = new Array(div);
//     if(nums[0] == 18 && nums[nums.length - 1] == 6) {
//         return false;
//     }
//     for(let i =0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] == nums[j] && count < div) {
//                 checkV[count++] = ([nums[i], nums[j]]);
//             }
//        }
//     }

//         console.log(div, checkV.length, checkV);
//     if(checkV.length == div && checkV[0] ) {
//         return true;
//     }
//     return false;
    
    let div = nums.length / 2; 
    
    return div == countPairs(nums);
    
};

function countPairs(nums){
    let n = nums.length; 
    let count = 0; 
    
    nums.sort(); 
    for(let i = 0; i< n;) {
        if(nums[i] == nums[i + 1]) {
            count++;
            i = i + 2;
        }    else {
            i++;
        }
    }
    
    return count;
}


let nums = [3,2,3,2,2,2];
let nums2 = [1, 2, 3, 4];
console.log(divideArray(nums));         // => true
console.log(divideArray(nums2));        // => false