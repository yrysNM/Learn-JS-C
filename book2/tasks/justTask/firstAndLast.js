function coutSameFirstLast(arr) {
	let count = 0;
	arr.filter((item, i, arr)  => {
		if(item[0] === item[item.length - 1]) {
			count++;
			console.log(item);
		}
	});

	console.log(count);
}

function justCountSameFirstLast(arr){
	let count = 0;
	for(let i =0; i < arr.length; i++){						// get all index in array
		if((arr[i])[0] == (arr[i])[arr[i].length - 1]) {	// check first letter and last to equal
			count++;										//cnt
			console.log(arr[i]);
		}
	}

	console.log(count);
}

justCountSameFirstLast(['yry', 'zyz', 'aba', '1221']);
console.log("--------------------------------------------");
coutSameFirstLast(['abc', 'xyx', 'aba', '1221']);