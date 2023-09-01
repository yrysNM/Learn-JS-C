const kSum = function(nums, target, start, k) {
    let res = []; 

    if(start == nums.length) {
        return  res;
    }

    let averange_value = target / k; 
    if(nums[start] > averange_value || averange_value > nums[nums.length - 1]) {
        return res;
    }

    if(k == 2) {
        return twoSum(nums, target, start);

    }

    for(let i = start; i< nums.length; i++) {
        if(i == start || nums[i - 1] != nums[i]) {
            kSum(nums, target - nums[i], i + 1, k - 1).forEach(item => {
                res.push([nums[i]]);
                res[res.length - 1].push(item);
            });
        }
    }

    return res;
};

function twoSum(nums, target, start) {
    let res = []; 
    let lo = start, hi = nums.length - 1; 

    let st = new Set(); 

    for(let i = start; i < nums.length; i++) {
        if((res.length == 0) || res[res.length - 1][1] != nums[i]) {
            if(st.has(target - nums[i])) {
                res.push(target - nums[i], nums[i]);
            }
        }
        st.add(nums[i]);
    }
    return res;
    // while(lo < hi) {
    //     let currSum = nums[lo] + nums[hi];
    //     if(currSum < target || (lo > start && nums[lo] == nums[lo - 1])) {
    //         ++lo; 

    //     }else if (currSum > target || (hi < nums.length - 1 && nums[hi] == nums[hi+ 1])) {
    //         --hi;
    //     }else {
    //         res.push(nums[lo++], nums[hi--]);
    //     }
    // }
    // return res;
}

function fourSum(nums, target) {
    nums.sort((a, b) => a - b); 
    return kSum(nums, target, 0, 4);
}

const nums = [1,0,-1,0,-2,2], target = 0;
console.log(fourSum(nums, target));