/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let pos1 = nums1.length; 
    let pos2 = nums2.length;
       let maxLength = Math.min(pos1, pos2);
    if(pos1 != pos2) {
        return binaryCancat(nums1, nums2);
    }
    return binaryCancat(nums1, nums2, pos1);
};


const binaryCancat = (arr1, arr2) => {
    let arr = arr1.concat(arr2);
    arr.sort((a, b) => a - b);
    let length = arr.length;
    
    if(length % 2 == 1) {
        return arr[Math.floor(length / 2)];
    }else {
        return (arr[length / 2] + arr[(length / 2) - 1]) / 2;
    }
}


const findMedianTwoArray = (arr1, arr2, pos) => {
    // let pos1 = nums1.length; 
    // let pos2 = nums2.length;
    // let maxLength = Math.max(pos1, pos2);
    // let maxPos = pos;
    
    //console.log(pos);
    if(pos <= 0) {
        return -1; 
    }
    
    if(pos == 1) {
        return (arr1[0] + arr2[0]) / 2;
    }
    
    console.log(arr1, arr2);
    if(pos == 2) {
        return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2; 
    }
    
    let  median1 = medianOfArray(arr1);
    let median2 = medianOfArray(arr2);
    
    if(median1 == median2) {
        return median1;
    }
    
    let evenOffSet = pos % 2 == 0  ? 1: 0,
        offSetMinus = Math.floor(pos /  2) - evenOffSet, 
        offSetPlus = Math.floor(pos / 2) + evenOffSet;
    
    if(median1 < median2) {
        return findMedianTwoArray(arr1.slice(offSetMinus), arr2.slice(offSetMinus), offSetPlus);
    }else {
        return findMedianTwoArray(arr2.slice(offSetMinus), arr1.slice(offSetMinus), offSetPlus);
    }
    
};

function medianOfArray(array) {
    let length= array.length; 
    
    if(length % 2 == 1) {
        return array[Math.floor(length / 2)];
    }else {
        return (array[length / 2] + array[length / 2 - 1]) / 2;
    }
}




let arr1 = [1,  3, 12, 13, 23];
let arr2 = [ 3, 4, 5, 12];

console.log(findMedianSortedArrays(arr1, arr2)); 