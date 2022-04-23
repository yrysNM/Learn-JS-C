function printAllKLength (str, str1,  k) {
	let n = str.length; 
	printAllKLengthRec(str, str1,  "", n, k);
}

function printAllKLengthRec(str, str1, prefix, n, k) {
	if(k == 0) {
		console.log(prefix);
		return;
	}

	for(let i = 0; i < n; i++) {
		let newPrefix = prefix + str1[i];

		printAllKLengthRec(str, str1, newPrefix, n,  k - 1);
	}
}

printAllKLength("abc", "def", 2);