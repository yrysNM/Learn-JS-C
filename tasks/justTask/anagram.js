/* function anagram(str1, str2) {
	

	let charstr1 = [...str1.toLowerCase()];
	let charstr2 = [...str2.toLowerCase()];

	if(charstr1.length === charstr2.length) {
		for(let i = 0; i < charstr1.length; i++){
			if(charstr1[i] === charstr2[i]) {
				return true;
			}else {
				return false;
			}


		}
	}

	return false;
} */

function buildCharObject(str) {
	const charObj = {};
	str = str.toUpperCase().replace(/[^\w]/g, '');

	for(let char of str){ 
		charObj[char] = charObj[char] + 1 || 1;
	}

	return charObj;
}

function anagram(str1, str2) {
	const aCharobj = buildCharObject(str1);
	const bCharObj = buildCharObject(str2);

	if(Object.keys(aCharobj).length  !== Object.keys(bCharObj).length) {
		return false;
	}

	for(let char in aCharobj) {
		if(aCharobj[char] !== bCharObj[char]) {
			return false;
		}
	}
	console.log(aCharobj, bCharObj)

	return true;
}


console.log(anagram("friend", "Finder")); 
console.log(anagram("rat", "car"));