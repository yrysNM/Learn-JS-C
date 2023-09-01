/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = (nums, k) => {
    k  %= nums.length; 

    const result = nums.splice(nums.length - k);

    nums.unshift(...result);

    return nums;
};

let nums = [1,2,3,4,5,6,7], k = 3;

console.log(rotate(nums, k));       // => 

/* Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4] */