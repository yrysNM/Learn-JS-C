/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let closestSum = Number.MAX_VALUE; 

    for(let i = 0; i < nums.length; i++) {
        for(let j = i +1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                if(Math.abs(target - closestSum) > Math.abs(target - ([nums[i] + nums[j] + nums[k]]))) {
                    closestSum = (nums[i] + nums[j] + nums[k]);
                }
            }
        }
    }
    return closestSum; // time complexity O(m^3)
};

function solution(arr, x) {
    arr.sort((a, b) => a - b);

    let closestSum = 1000000000;

    for(let i = 0; i < arr.length; i++) {
        let ptr1 = i + 1, ptr2 = arr.length - 1;

        while(ptr1 < ptr2) {
            let sum = arr[i] + arr[ptr1] + arr[ptr2];

            if(Math.abs(1 * x - sum) < Math.abs(1 * x - closestSum)) {
                closestSum = sum;
            }

            if(sum > x) {
                ptr2--;
            }

            else {
                ptr1++;
            }
        }
    }
    return closestSum;
}

const nums = [-1,2,1,-4], target = 1;
console.log(threeSumClosest(nums, target));
console.log(solution(nums, target));