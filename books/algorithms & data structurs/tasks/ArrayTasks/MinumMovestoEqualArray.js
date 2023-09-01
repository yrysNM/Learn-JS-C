function minMove2(nums) {
    nums.sort((a, b) => a - b);

    let ans = 0, median = nums[~~(nums.length / 2)];
    for (let i = 0; i < nums.length; i++) {
        ans += Math.abs(median - nums[i]);

    }

    return ans;
}


const nums = [1, 2, 3];

console.log(minMove2(nums));

