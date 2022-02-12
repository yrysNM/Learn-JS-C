//1)Exercises USE THE IMPLEMENT SQUARE ROOT FUNCTION FOR AN INTEGER WITHOUT USING ANY 
//MATH LIBRARIES

function sqrtIntNaive(number) {
	if(number == 0 || number == 1) {
		return number;
	}

	let index = 1, square = 1;

	while(square < number) {
		if(square == number) {
			return square;
		}

		index++;
		square = index * index;
	}

	return index;		//Time Complexity: O(n)
}

//console.log(sqrtIntNaive(9));

//likely binary search solve 2
function sqrtIntNaiveBetter(number) {
	let arr = [];

	for(let i = 1; i <= number; i++) {
		arr.push(i);
	}

	let left = 0,
		right = arr.length - 1;

	while(left <= right) {
		let mid = Math.floor((left + right) / 2);

		if(arr[mid] * arr[mid] == number) {
			return arr[mid];
		}else if(arr[mid] * arr[mid] < number) {
			left = mid + 1;
		}else {
			right = mid - 1;
		}
			//time complexity: o(2nlog(n))
	}
}
//console.log(sqrtIntNaiveBetter(10000));

//another variant 
function sqrtInt(number) {
	if(number == 0 || number == 1) return number; 

	let start =1, end = number,  ans;

	while(start <= end) {
		let mid = parseInt((start + end) / 2);

		if(mid * mid == number) {
			return mid;
		}

		if(mid *mid < number) {
			start = mid + 1;			//use the upper section
			ans = mid;
		}else {
			end = mid - 1;				// use thr lower  section
		}
	}

	return ans;							// Time Complexity: O(log2(n))
}

//console.log(sqrtInt(81));

//Bonus: Find a Square Root of a Float
function sqrtDouble(number) {
	let threshold = 0.1; 
	//9 try middle 
	let upper = number;
	let lower = 0;
	let middle;
	while(upper - lower > threshold) {
		middle = (upper + lower) / 2;

		if(middle * middle > number) {
			upper = middle;
		}else {
			lower = middle;
		}

	}
	return middle;
}

//console.log(sqrtDouble(9)); // 3.023437



//2) FIND IF TWO ELEMENTS OF AN ARRAY ADD UP TO A GIVEN NUMBER
function findTwoSum(array, sum) {
	for(let i = 0; i < array.length; i++) {
		for(let j = i + 1;j < array.length; j++) {
			if(array[i] + array[j] == sum) {
				return true;
			}
		}
	}
	return false;			//TIme complexity: o(n^2)
							// space complexity: o(1)

}

//console.log(findTwoSum([1, 2, 3, 4, 5], 9));	//=> true

//another 
function fundTwoSumBetter(array, sum) {
	let store = {};
	
	for(let i = 0, arrayLength = array.length; i< arrayLength; i++) {
		if(store[array[i]]) {
			return true;
		}else {
			store[sum - array[i]] = array[i];
		}
	}

	return false;			// Time complexity: o(n)
							// space somplexity: o(n)
}

console.log(fundTwoSumBetter([10,1,2,7,6,1,5], 8));	//=> false



//3)FIND AN ELEMENT WITHIN AN ARRAY THAT APPEARS ONLY ONCE
// Input: arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8] Output: 4
// Input: arr = [1, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8] Output: 8
function findOnlyOnce(arr, low, high) {
	if(low > high) {
		return null;
	}

	if(low == high) {
		return arr[low];
	}

	let mid = Math.floor((high + low) / 2);

	if(mid % 2 == 0) {
		if(arr[mid] == arr[mid + 1]) {
			return findOnlyOnce(arr, mid + 2, high);
		}else {
			return findOnlyOnce(arr, low, mid);
		}
	}else {
		if(arr[mid] == arr[mid - 1]) {
			return findOnlyOnce(arr, mid + 1, high);
		}else {
			return findnlyOnce(arr, low, mid - 1);
		}
	}
}

function findOnlyOnceHelper(arr) {
	return findOnlyOnce(arr, 0, arr.length);
}

//console.log(findOnlyOnceHelper([1, 1, 2, 2, 4, 4, 5, 5, 6]));	// => 6 



//4) Create javascript sort comparator function that would sort string by length
let mythcal = ["dragon", "slayer", "erhseg", "asd", "ws"];

//console.log(mythcal.sort((a, b) => a.length - b.length));

let mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned tark'];

function sortComparator(a, b) {
	return a.indexOf('a') - b.indexOf("a");
}

//console.log(mythical.sort(sortComparator)); // => //[ 'magic', 'dragon', 'slayer', 'wizard of oz', 'ned tark' ]

//sort object elments by  the number of properties as shown here:
let mythical2 =[{prop1:", prop2:"},{prop1:", prop2:", prop3: "prop3"},{prop1:", prop2:"}];


function sortComparatorObj(a, b) {
	return Object.keys(a).length - Object.keys(b).length;
}

//console.log(mythical2.sort(sortComparatorObj));		// => 
// [
//   { prop1: ', prop2:' },
//   { prop1: ', prop2:' },
//   { prop1: ', prop2:', prop3: 'prop3' }
// ]



//5) Implment a word counter list
function countList(sentence) {
	let hashTable = {}, ansObj = {};

	let arr = sentence.replace(/[.]/g, "").split(" ");
	let last;
	
	for(let i = 0; i < arr.length; i++) {
		let currentArray = arr[i];
		last = null; 

			if(last != currentArray) {
				if(!hashTable[currentArray]) {
					hashTable[currentArray] = 1;
				}else {
					hashTable[currentArray]++;
				}
				last = currentArray;
			}
	}

	let tempArray = [];
	for(let prop in hashTable) {
		tempArray.push([hashTable[prop], prop]);
	} 

	function sortComp(a, b) {
		return b[0] - a[0];
	} 

	tempArray.sort(sortComp);

	for(let i = 0;i  < tempArray.length; i++) {
		let current = tempArray[i];

		ansObj[current[1]] = current[0];
	}


	console.log(ansObj);
}


//another method or variant 
function wordCount(sentence) {
	//period with nothing so it doesn't count as word
	let wordsArray = sentence.replace(/[.]/g,"").split(" "),
 		 occurenceList = {}, answerList = {};


	for(let i= 0, wordsLength = wordsArray.length; i < wordsLength; i++) {
		let currentWord = wordsArray[i];
		//doesnt exist, set a 1st occurrence

		if(!occurenceList[currentWord]) {
			occurenceList[currentWord] = 1;
		}else {
			occurenceList[currentWord]++;		// add occurences 
		}
		
		
	}

	let arrayTemp = [];
	//push the value and key as fixed array
	for(let prop in occurenceList) {
		arrayTemp.push([occurenceList[prop], prop]);
	}

	

	function sortcomp(a, b) {
		return b[0] - a[0]; 					// compare the first element of the array
	}

	arrayTemp.sort(sortcomp);					// sort

	for(let i  = 0,  arrLength = arrayTemp.length; i< arrLength; i++) {
		let current = arrayTemp[i];
		answerList[current[1]] = current[0];	// key value pairs

	}

	return answerList;							//Time Complexity: O(nlog2(n))
												//Space Complexity: O(n)
}

let obj= wordCount("practice makes perfect. get perfect by practice. just practice");
console.log(obj);								//=> { practice: 3, perfect: 2, makes: 1, get: 1, by: 1, just: 1 }
