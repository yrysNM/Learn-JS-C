
//With while 
const iterativeFunction = function(arr, x) {
	let start = 0, 
		end = arr.length - 1,
		mid = 0;

	while(start <= end){
		mid = Math.floor((start + end) / 2);

		if(arr[mid] === x) return true; 

		else if(arr[mid] < x)
			start = mid + 1;
		else 
			end = mid - 1;
	}

	return false;
}

//with Recursive 
const recursiveFunction = function(arr, x, left, right){
	//base condition
	if(left > right) return false;

	//Find the middle index
	let mid = Math.floor((left + right) / 2);

	//Compare mid wth given key x
	if(arr[mid] === x) return true;

	//if element at mid is greater than x, 
	//search in  the left half of mid
	if(arr[mid] > x) {
		return recursiveFunction(arr, x, left, mid - 1);
	}else {
		//if element at mid is smaller than x
		// search in the right half of mid
		return recursiveFunction(arr, x, mid + 1, right);
	}
 
}

let arr = [1, 3, 5, 7, 8, 9];
console.log(recursiveFunction(arr, 3, 0, arr.length - 1));