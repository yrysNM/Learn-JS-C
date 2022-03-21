/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sqarr = []; 

    for(let i = 0;i< nums.length; i++){
        sqarr.push(Math.pow(nums[i], 2));
    }  

    return quickSort(sqarr);
};

function quickSort(arr){

    const res = quickSortHelper(arr, 0, arr.length - 1);
    return res;
}

function quickSortHelper(items, left, right) {
    let index; 

    if(items.length > 1) {
        index= partition(items, left, right);
        
        if(left <  index - 1){
            quickSortHelper(items, left, index - 1);
        }

        if(index < right){
            quickSortHelper(items, index, right);
        }
    }

    return items;
}

function partition(nums, left, right){

    let pivot = nums[Math.floor((right + left) /  2)]; 

    while(left <= right){
        while(pivot > nums[left]) {
            left++;
        }

        while(pivot < nums[right]) {
            right--;
        }

        if(left <= right){
            let temp = nums[left]; 
            nums[left] = nums[right]; 
            nums[right] = temp;
            left++; 
            right--;   
        }
    }

    return left;
}


let arr= [-4,-1,0,3,10];
console.log(sortedSquares(arr));

let arr2 =  [-7,-3,2,3,11];
console.log(sortedSquares(arr2));