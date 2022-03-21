/**
 * @param {number[]} nums
 * @return {number[]}
 */


const sortedSquares = (nums) =>  {
    let sqarr = []; 

    for(let i = 0; i < nums.length; i++) {
        sqarr.push(Math.pow(nums[i], 2));
    }

    return sqarr.sort((a, b) => a - b);
};  

//test

let  nums = [-4,-1,0,3,10];

console.log(sortedSquares(nums));       // => [ 0, 1, 9, 16, 100 ]