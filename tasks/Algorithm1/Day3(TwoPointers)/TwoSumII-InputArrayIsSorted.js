function findSumBetter(arr, weight) {
	let hashTable = {};

	for(let i = 0; i < arr.length; i++) {
		let currentElement = arr[i];

		let difference = weight - currentElement;

		if(hashTable[currentElement] != undefined && hashTable[currentElement] != null) {
			return [i, hashTable[weight - currentElement]];
		}else {
			hashTable[difference] = i;
		}
	}

	return -1;
}

const twoSum = (numbers, target) => {
	 //let arr = [0, 1];
    nums.sort( function(a, b) {
        return a - b;  
    });
    console.log(nums);
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target){
                arr = [i + 1, j + 1];
                
                return arr;
            }
        }
    }
    
    return arr;
};



let numbers = [2,7,11,15], target = 9;

console.log(twoSum(numbers, target));