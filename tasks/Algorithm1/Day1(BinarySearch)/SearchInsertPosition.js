/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


const seachInsert = (nums, target) => {
    let right = nums.length - 1;
    let left= 0;

    if(nums[right] < target) return right + 1;
    if(nums[left] >= target) return 0;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] == target) {
            return mid;
        }else if(nums[mid] < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }

    return left;
};


//test 
        //  0  1  2  3  4 
        //  1  2  5  5  6 
let nums = [1, 3, 5, 6]; 
let target = 5; 

let target2 = 2;

console.log(seachInsert(nums, target));         // => 2
console.log(seachInsert(nums, target2));        // => 1