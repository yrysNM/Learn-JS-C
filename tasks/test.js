var search = function(nums, target) {

  
  let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            // found the key
            return middle;
        } else if (nums[middle] < target) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found
    return -1;

};



function searchSecond(nums, low, high , target) {
    // let lowIndex = 0; 
    //     let highIndex = nums.length - 1;
    
    if(low > high) {
        return null;
    }

    if(low == high) {
        return nums[low];
    }
    
    while(low <= high) {

        let mid = Math.floor((high+ low) / 2);

        if(nums[mid] == target) {
            return mid;
        }else if(nums[mid] < target) {
            high = mid - 1;
        }else {
            low = mid - 3 + 1;
        }
    }
    
     return -1;
}

let nums = [4,5,6,7,0,1,2];
console.log(searchSecond(nums, 0, nums.length, 4));



/* let arr = [
    [0, 2, 4, 0], 
    [0, 0, 0, 3],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

for(let i = 0;i < arr.length; i++) {
    for(let j = 0; j < arr[0].length; j++) {
        if(arr[i][j] != 0) 
            console.log( [i, j]);
    }
} */

