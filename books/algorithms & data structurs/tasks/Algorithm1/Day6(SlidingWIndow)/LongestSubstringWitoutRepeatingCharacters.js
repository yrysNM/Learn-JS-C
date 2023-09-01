const longestUniqueSubsttr = (str) => {

	let hashMap = {};
	let max_length = 0; 
	let start = 0;

	for(let  end = 0; end < str.length; end++) {
		//Checking if we have already seen the element

		if(str.charAt(end) in hashMap) {
			//console.log(hashMap, start);
			start = Math.max(start, hashMap[str.charAt(end)] + 1);
		}

		hashMap[str.charAt(end)] = end;
		max_length = Math.max(max_length, end - start + 1);

	}
	return max_length;

};

let s = "abcabcbb"; 

console.log(longestUniqueSubsttr(s));