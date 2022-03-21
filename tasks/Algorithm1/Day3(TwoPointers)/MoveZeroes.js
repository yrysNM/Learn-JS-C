/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


const moveZeroes = (nums) => {
    let count = 0;

    let new_arr = nums.filter((val) => {
        return val != 0;
    });

    nums.forEach(val => {
        if(val == 0) {
            count++;
        }
    });

    for(let i = 0; i < count; i++) {
        new_arr.push(0);
    }

    nums.length= 0; 
    nums.push(...new_arr);

    return nums;
};

let nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));