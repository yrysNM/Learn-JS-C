/* 
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */

/*
	param {number[]} nums 
	param {number}
*/

let removeDuplicates = function(nums) {
	let hashTable = {};
	let last; 

	for(let i = 0; i < nums.length; i++) {
		let val = nums[i];
		last = null; 
		if(last != val) {
			if(!hashTable[val]) {
				hashTable[val] = 1;
			}else {
				hashTable[val]++;
			}
		}
		last = val;
	}

	for(let val in hashTable) {
		while(hashTable[val] > 2) {
			for(let i = 0; i < nums.length; i++) {
				if(nums[i] == val) {

					nums.splice(i, 1);
					console.log(nums.join(" "));
					break;
				}
			}
			hashTable[val]--;
		}
	}

}

//test
removeDuplicates([1,1,1,2,2,3]);
removeDuplicates([0,0,1,1,1,1,2,3,3]);
/* Time Complexity o(n + n^3)
	space complexity o(n)
 */