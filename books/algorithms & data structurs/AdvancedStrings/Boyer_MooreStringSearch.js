function buildBadMatchTable(str) {
	let tableObj = {},
		strLength = str.length;

	for(let i = 0; i < strLength - 1; i++) {
		tableObj[str[i]] = strLength - 1 - i;
	}

	if(tableObj[str[strLength- 1]] == undefined) {
		tableObj[str[strLength - 1]] = strLength;
	}

	return tableObj;
}

buildBadMatchTable('data'); 	// {d: 3, a: 2, t: 1}
buildBadMatchTable('struct'); 	// {s: 5, t: 4, r: 3, u: 2, c: 1}
buildBadMatchTable('roi'); 		// {r: 2, o: 1, i: 3}
buildBadMatchTable('jam');		// {j: 2, a: 1, m: 3}


function boyerMoore(str, pattern) {
	let badMatchTable = buildBadMatchTable(pattern),
		offset = 0,
		patternLastIndex = pattern.length - 1,
		scanIndex = patternLastIndex,
		maxOffset = str.length - pattern.length;

	//if the offset is  bigger than maxOffset, cannot b found 
	while(offset <= maxOffset) {
		scanIndex = 0;
		while(pattern[scanIndex] == str[scanIndex + offset]) {
			if(scanIndex == patternLastIndex) {
				//found at this index
				return offset;
			}

			scanIndex++;
		}

		let badMatchString = str[offset + patternLastIndex];
		if(badMatchTable[badMatchString]) {
			//increase the offset if it exists
			offset += badMatchTable[badMatchString];
		}else {
			offset += 1;
		}
	}

	return -1;
}

console.log(boyerMoore('Time complexity: O(N * M)', "O(N * M)"));
console.log(boyerMoore('jellyjam','jam'));
console.log(boyerMoore('oooabdie','ab'));