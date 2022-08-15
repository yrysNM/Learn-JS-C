function waysToCoverSteps(step) {
	if(step < 0) return 0; 
	if(step == 0) return 1;

	return waysToCoverSteps(step - 1) + waysToCoverSteps(step - 2) + 
		waysToCoverSteps(step - 3);		//Time Complexity: O(3n)
}

// console.log(waysToCoverSteps(12));

function waysToConverStepDP(step) {
	let cache = {}; 
	if(step < 0) return 0; 
	if(step == 0) return 1;

	//check if exists in  cache 
	if(cache[step]) {
		return cache[step];
	}else {
		cache[step] = waysToConverStepDP(step - 1) + waysToConverStepDP(step - 2) + waysToConverStepDP(step - 3);
		return cache[step];				//Time Complexity: O(n)
	}
}

console.log(waysToConverStepDP(12));