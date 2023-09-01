/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1; 

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(target == nums[mid]) {
            return mid;
        }else if(nums[mid] < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }

    return -1;
};


//test 
let nums = [-1, 0, 3, 5, 9,12];
let target = 9; 

console.log(search(nums, target));          // => 4