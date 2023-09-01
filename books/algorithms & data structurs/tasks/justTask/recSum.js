function recSum(arr) {
	return (arr.length === 0) ? 0 : arr[0] + recSum(arr.slice(1));
}

function cntArr(arr) {
	let count;
	if(arr.length === 0) {
		 return 0;

	}

		return 1 + cntArr(arr.slice(1));
}

function maxArr(arr) {
	let max = arr[0];

	/*// loop solve  
	for(let i = 0;  i < arr.length; i++){
		if(arr[i] > max) {
			max = arr[i];
		}
	} 
	*/

	if(arr.length ===  0) 
		return 0;

	//recursion
	return  (max < maxArr(arr.slice(1))) ? max = maxArr(arr.slice(1)) : max;
	
}

console.log(recSum([1, 2, 3, 4]));

console.log(cntArr([1, 2, 2, 4, 5, 6, 7, 8,9 ]));

console.log(maxArr([2343243, 234234324, 12334, 23423412, 234]));