const readLine = require("readline");
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


function rotate(nums, k) {
    let count = 0;
    let left = 0;
    let right = nums.length - 1;

    let pivot = nums[Math.floor((right + left) / 2)];


    k = k % nums.length; 

    const result = nums.splice(nums.length - k);
    nums.unshift(...result);

    return nums;
} 



function main() {
    const RL = readLine.createInterface(process.stdin, process.stdout);
    let new_arr;
    
//     RL.on("дшту", (k) =>  {
//         console.log(rotate(new_arr, k));
// 
//     });
    RL.question("Array?: ", (arr) => {

        new_arr = arr.split(",");
        RL.prompt(); 

        RL.question("Roatate number(k): ", (k) => {
            console.log(rotate(new_arr,k));
        });
            
    });


}

main();