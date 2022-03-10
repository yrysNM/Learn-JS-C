//1) [1,2, 3, 4, 5] sum 9 = 5 + 4
function plus(arr , number) {
	for (let i = 1; i < arr.length;i++) {
		let j = i - 1; 
		while(j >= 0) {
			if(arr[i] + arr[j] == number){
				return arr[i] + " " + arr[j];
			}

			j--;
		}
	}
	return - 1;
}			// o(n^2)

//console.log(plus([1,2, 3, 4, 5], 9));

function findSum(arr,  weight){
	for(let i = 0, arrLength = arr.length; i < arrLength; i++){
		for(let j = i + 1; j < arrLength; j++){
			if(arr[i] + arr[j] == weight) {
				return [i, j];
			}
		}
	}
	return -1;		//o(n^2)
}



//console.log(findSum([1, 2, 3,4,5], 9));


function  findSumBetter(arr, weight){
	let hashTable = {};

	for(let i = 0, arrLength = arr.length; i < arrLength;i++){
		let currentElement = arr[i];
		let difference = weight - currentElement;

		//Check the right one already exists
			if(hashTable[currentElement] != undefined){
				return [i, hashTable[weight - currentElement]];
			}else {
				//store index
				hashTable[difference] = i;
				//console.log(i);
			}
			
	}

	return - 1;		// o(n)

}

//console.log(findSumBetter([1, 2, 3, 4, 5], 9));




// 2) implment the array.slicce( function  from  scratch 
function  arraySlice(array, beginIndex, endIndex){
	// if no parameters passed, return the array
	if(!beginIndex &&  !endIndex)
	{
		return array;
	}

	//if only beginning  index is found set endIndex to size 
	endIndex = array.length; 

	let partArray = []; 

	//if both brgin and end index specifiend return the part of the array
	for(let i = beginIndex; i < endIndex; i++) {
		partArray.push(array[i]);
	} 

	return partArray;		// o(n)
}

//console.log(arraySlice([1, 2,3, 4], 1, 2));			// =>[ 2, 3, 4 ]
//console.log(arraySlice([1, 2, 3, 4], 2, 4));		    // => [3, 4]




//3) find the medina of two sorted arrays of the size
function findMedian(arr) {
	let num1 = 0;
	let num2 = 0;

	let middle = Math.floor((0 + arr.length - 1) / 2);

	return (arr[middle] + arr[middle + 1]) / 2;		//without check odd
}

function medianOfArray(array) {
	let length = array.length;
	//Odd
	if(length % 2 == 1) {
		return array[Math.floor(length / 2)];
	}else {
		//Even 
		return (array[length / 2] + array[length / 2 - 1]) / 2;
	}
}

//console.log(medianOfArray([1,2, 3, 4]));

// array1 = [1,2,3] and array2 = [4, 5, 6] the median must be 
// present within [2,3] and [4,5]
/* max(arr1[0], arr2[0]) + min(arr1[1], arr2[1]) / 2 */
function medianOfArray(array) {
	let length = array.length; 
	//Odd
	if(length % 2 == 1){
		return array[Math.floor(length / 2)];

	}else {
		//Even
		return(array[length / 2] + array[length / 2 - 1]) / 2;
	}
}

//arr2 is the bigger array
function medianofTwoSortedArray(arr1,arr2, pos) {
	if(pos <= 0) {
		return -1;
	}
	if(pos == 1) {
		return (arr1[0] + arr2[0]) / 2; 
	}

	if(pos == 2) {
		return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
	}

	let median1 = medianOfArray(arr1);
	let median2 = medianOfArray(arr2);

	if(median1 == median2) {
		return median1;
	}

	let evenOffSet = pos % 2 == 0 ? 1: 0,
		offSetMinus = Math.floor(pos / 2) - evenOffSet, 
		offSetPlus = Math.floor(pos / 2) + evenOffSet;

	if(median1 < median2) {
		return medianofTwoSortedArray(arr1.slice(offSetMinus),  
								arr2.slice(offSetMinus), offSetPlus);
	}else {
		return medianofTwoSortedArray(arr2.slice(offSetMinus), arr1.slice(offSetMinus), offSetPlus);
	}

		//o(log(n))
}

console.log(medianofTwoSortedArray([1,2, 5], [3, 4, 6], 3));			// => 3.5
console.log(medianofTwoSortedArray([11, 23, 24], [32, 33, 450], 3));	// => 28
console.log(medianofTwoSortedArray([1,3, 5, 1], [3, 4, 5, 12], 4));			// => 2.5



//4) find common elements in k-sorted arrays
/* 
1 var arr1 = [1, 5, 5, 10];
2 var arr2 = [3, 4, 5, 5, 10];
3 var arr3 = [5, 5, 10, 20];
4 var output = [5 ,10];
In this example with three arrays, k=3. */
function commonElements(kArray) {
	let hashMap = {};
	let last, answer = [];

	for(let i = 0, kArrayLength = kArray.length; i < kArrayLength; i++){
		let currentArray = kArray[i];
		last = null;

		for(let j = 0, currentArrayLen = currentArray.length; j < currentArrayLen; j++) {
			let currentElement = currentArray[j];

			if(last != currentElement) {
				if(!hashMap[currentElement]) {
					hashMap[currentElement] = 1; 
					

				}else {
					hashMap[currentElement]++;
				}
			}
			last = currentElement;
		}
	}

	//Iterate through hashMap
	for(let prop in hashMap){
		if(hashMap[prop] == kArray.length) {
			answer.push(parseInt(prop));
		}
	}
	console.log(hashMap);
	return answer;
}

console.log(commonElements([[1 ,2 ,3 ],[1 ,2 ,3 ,4 ],[1 ,2 ]])); // [ 1, 2 ]