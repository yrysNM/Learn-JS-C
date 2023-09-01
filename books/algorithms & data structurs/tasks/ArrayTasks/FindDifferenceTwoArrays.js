/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let res = []; 
    let hashMap = {}, hashTable = {};
    let last, answer = [];
    
    for(let i =0; i < nums1.length; i++) {
        let currentArray = nums1[i];
        last=null;
        
        if(last != currentArray) {
            if(!hashMap[currentArray]) {
                hashMap[currentArray] = 1;
            }else {
                hashMap[currentArray]++;
            }
        }
        last  = currentArray;
        
        
    }
    
       for(let i =0; i < nums2.length; i++) {
        let currentArray = nums2[i];
        last=null;
        
        if(last != currentArray) {
            if(!hashMap[currentArray]) {
                hashMap[currentArray] = 1;
            }else {
                hashMap[currentArray]++;
            }
        }
        last  = currentArray;
        
        
    }
    
   let difference = nums1.filter(x => !nums2.includes(x));
    let difference2 = nums2.filter(x => !nums1.includes(x));
    let st = new Set(difference);
    let st2 = new Set(difference2);
    res.push(Array.from(st), Array.from(st2));
    
    return res;
};

let nums1 = [1,2,3], nums2 = [2,4,6];

console.log(findDifference(nums1, nums2));      // => [ [ 1, 3 ], [ 4, 6 ] ]