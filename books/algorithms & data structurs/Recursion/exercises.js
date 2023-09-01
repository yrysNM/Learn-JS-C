//1) Convert decimal (base 10) to binary number
let arr = [];
function convertBinary(num) {
	let div = "";
	if(num <= 0) {
		return;
	}
	 div = num % 2;
	 arr.push(div);
	
	return convertBinary(Math.floor(num / 2));		
	//Time complexity o(log(n))
	//Space Complexity: O(log2(n))
}
function base10ToString(n) {
	let binaryString = ""; 

	function base10ToStringHelper(n) {
		if(n < 2) {
			binaryString += n;
			return;
		}else {
			base10ToStringHelper(Math.floor(n / 2));
			base10ToStringHelper(n % 2);
		}
	}
	base10ToStringHelper(n);

	return binaryString;		//Time complexity o(log(n))
								//Space Complexity: O(log2(n))
}

console.log(base10ToString((33)));
convertBinary(33);
arr.reverse();
console.log(arr.join(""));



// 2)Print all permutations of an array
//Permuration we will neeed a function to swap elements
function swap(strArr, index1, index2) {
	let temp = strArr[index1];
	strArr[index1] = strArr[index2];
	strArr[index2] = temp;
}

function permute(strArr, begin, end) {
	if(begin == end) {
		console.log(strArr);
	}else {
		for(let i = begin; i < end + 1; i++) {
			swap(strArr, begin, i);
			permute(strArr, begin + 1, end);
			swap(strArr, begin , i);
		}
	}
}

function permuteArray(strArr) {
	permute(strArr, 0, strArr.length - 1);
	//Time Complexity: o(n!)
	//spac complexity: o(n!)

}		

//permuteArray(["A", "C", "D"]);
/*
	[ 'A', 'C', 'D' ]
	[ 'A', 'D', 'C' ]
	[ 'C', 'A', 'D' ]
	[ 'C', 'D', 'A' ]
	[ 'D', 'C', 'A' ]
	[ 'D', 'A', 'C' ]
*/



// 3) Flatten an object
let dictionary = {
	"Key1": "1",
	"Key2": {
		"a": "2",
		"b": "3",
		"c": {
			"d": "3",
			"e": "1"
		}
	}
}

function flattenDictionary(dictionary) {
	let flattenDictionary = {}; 

	function flattenDitionaryHelper(dictionary, propName) {
		if(typeof dictionary != "object") {
			flattenDictionary[propName] = dictionary;
			return;
		}

		for(let prop in dictionary) {
			//console.log(prop);
			if(propName == "") {
				flattenDitionaryHelper(dictionary[prop], propName + prop);
			}else {
				flattenDitionaryHelper(dictionary[prop], propName + "." + prop);
			}
		}
	}

	flattenDitionaryHelper(dictionary, "");
	return flattenDictionary;
	/* Time Complexity: O(n)
		Space Complexity: O(n) 
	*/
}

//console.log(flattenDictionary(dictionary));


//WRITE A PROGRAM THAT RECURSIVELY DETERMINES IF A STRING IS A PALINDROME
function isPolindromeHelper(word) {
	return isPolindromeRecursive(word, 0, word.length - 1);
}


function isPolindromeRecursive(word, firLetter, endLetter) {

	if(firLetter >=  endLetter) {
		return true;
	}

	if(word.charAt(firLetter) != word.charAt(endLetter)) {
		return false;
	}else {
		return isPolindromeRecursive(word, firLetter + 1, endLetter - 1);
		
	}

}


// console.log(isPolindromeHelper('aibohphobia'));		//=> false
// console.log(isPolindromeHelper("deifies"));		// => TRUE

/* Time Complexity: O(n)
	Space Complexity: O(n */