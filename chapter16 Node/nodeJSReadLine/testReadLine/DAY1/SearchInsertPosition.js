const readLine = require("readline");


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 	Input: nums = [1,3,5,6], target = 2
	Output: 1
 */

function searchInert(nums, target) {
	let right = nums.length - 1,
		left = 0;

	if(nums[right ] < target) return right + 1; 
	if(nums[left] >= target) return 0;

	while(left <= right) {
		let mid = Math.floor((left + right) / 2);
		if(nums[mid] == target) {
			return mid;
		}else if(nums[mid] <  target) {
			left = mid + 1;
		}else {
			right = mid - 1;
		}
	}

	return left;
}


function main() {	
	const RL = readLine.createInterface(process.stdin, process.stdout);

	let arr = [], tar, num = 0; 

	RL.question("Length array?: ", (n) => {
		num = n;
	});

	let count =0;

	RL.on("line", (line) => {
		let newNumbers = line.split(" ");

		arr.push(...newNumbers);
		count++;

		if(num == count) {
			RL.question("Target?: ", (target) => {
				console.log(searchInert(arr, target));
			});
		}
	});
}

main();