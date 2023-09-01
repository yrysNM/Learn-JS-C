function max_Element(arr) {
	let max = Number.MIN_VALUE;

	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > max) {
			max= arr[i];
		}
	}
	return max;
}


function getCount(arr) {
	let n = arr.length;
	let max = max_Element(arr);
	let freq = new Array(max + 1).fill(0);


	for(let i = 0; i < n; i++) {
		freq[arr[i]]++;
	}


	let res = new Array(max + 1).fill(0); 

	for(let i =1; i <= max; ++i) {
		for(let j = i; j <= max; j += i) {
			if(i == j) {
				res[i] += (freq[j] - 1);
			}else {
				res[i] += freq[j];

				res[j] += freq[i];
			}
		}
	}

	let ans = [];
	for(let i =0; i< n; i++) {
		ans.push(res[arr[i]]);
	}

	return ans;
}


let arr = [1, 3, 4, 2, 6];


console.log(countIndex(arr));