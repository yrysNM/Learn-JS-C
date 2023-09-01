function buildMatchTable(str) {
	let tableObj= {},
		strLength = str.length;

	for(let i = 0; i < strLength -1; i++) {
		tableObj[str[i]] = strLength - 1 - i;

	}

	if(tableObj[str[strLength - 1]] == undefined) {
		tableObj[str[strLength - 1]] = strLength;
	}

	return tableObj;
}


function boyerMoore(str, pattern) {
	let badMatchTable = buildMatchTable(pattern);
	let offset = 0, patternLastIndex = pattern.length - 1, 
	scanIndex = patternLastIndex, maxOffSet = str.length - pattern.length;

	while(offset <= maxOffSet) {
		scanIndex = 0;
		while(pattern[scanIndex] == str[scanIndex + offset]) {
			if(scanIndex == patternLastIndex) {
				return offset;
			}

			scanIndex++;
		}

		let badMatchString = str[offset + patternLastIndex];
		if(badMatchTable[badMatchString]) {
			offset += badMatchTable[badMatchString];
		}else {
			offset += 1;
		}
	}

	return -1;
}


const allCombination = (set, k,  partial, res = []) => {
	/* let res= [];
	let str = "";
	for(let i =0; i < depth - 1;i++) {
		//for(let j = i + 1; j < arr.length; j++) {
			str += arr[i + 1];
			res.push(str);
			//res.push(`${arr[i]}${arr[j]}`);
		//}
	}

	// while(depth > 0) {
	// 	res.push(`${arr[depth]}`)
	// }

	return res; */

	//ANOTHNER METHOD
	/* if(depth === 1) 
		return arr;
	else {
		const res = allCombination(arr, depth - 1).flatMap((val) => 
			arr.map((char) => val + char)
			);
		return arr.concat(res);
	}

	return arr; */
	let count = 0;
	// if(!partial) partial = [];

	for(let el in set) {
		if(k > 1) {
			let set_copy = set.slice();
			set_copy.splice(el, 1);
			allCombination(set_copy, k  - 1, partial.concat([set[el]]), res);

		}else {
			res.push(partial.concat([set[el]]).join(''));

		
		}
	}

	return res;
};



/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = function(s, words) {


    let ans = [], partial = [];
    let com = allCombination(words ,words.length, partial);
    console.log(com);
   
   	com.forEach(item => {
  	  	if(boyerMoore(s, item) != -1 && item != undefined) {
  	  		//ans.push(boyerMoore(s, item));
  	  		ans.push(s.indexOf(item));
  	  	}
   	});
   	return ans;
};

let s = "barfoothefoobarman", words = ["foo","bar"];


//let s = "foobarfoobar", words = ["foo","bar"];
console.log(findSubstring(s, words));
