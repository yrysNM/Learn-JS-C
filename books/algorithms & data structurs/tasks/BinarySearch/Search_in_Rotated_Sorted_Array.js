/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// [4, 5, 6, 7, 0, 1, 2]
    //index // value
// left = 0 || 4 
// right = 6 || 2 
// min = 3 || 7


var search = function(nums, target) {
    let left = 0;
    let right= nums.length - 1; 

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] == target) {
            return mid;
        }

        //determine with seqment is sorted
        if(nums[left] <= nums[mid]) {
            //sub sub array
            if(nums[left] <= target  && target <= nums[mid]) {
                right = mid -1;
            }else  {
                left = mid + 1;
            }
        }else {
            if(nums[mid] <= target && target <= nums[right]) {
                left = mid + 1;
            }else {
                right = mid - 1;
            }
        }
    }
    return -1;
};

//test1
let nums = [4,5,6,7,0,1,2], target = 0; 

let nums2 = [8,1,2,3,4,5,6,7], target2 = 6;

console.log(search(nums, target));      // => 4
console.log(search(nums2, target2));    // => -1