const searchInsert= function(nums, target) {
	let right = nums.length - 1; 
	let left = 0; 

	if(nums[right] < target) return right + 1; 
	if(nums[left] >= target) return 0;

	while(left <= right) {
		let mid = Math.floor((left + right) / 2);

		if(nums[mid] == target) {
			return mid;
		}else if(nums[mid] < target) {
			left = mid + 1;
		}else 
			right = mid- 1;
	}

	return left;
};