function goldbax(n) {
	let arr=  {
		a: [],
		b: [],
	};
//	console.log(allPrimesLessThanN(n));
	for(let i =0; i< n; i++) {
		if(isPrime(i) && isPrime(n - i)) {
			console.log(i, n- i);
			break;
			// arr['a'].push(i);
			// arr['b'].push(i);
		}
	}

	// for(let i =0; i < arr['a'].length; i++) {
	// 	if(arr['a'][i] + arr['b'][i] <= n) {
	// 		console.log(arr['a'][i],  arr['b'][i]);
	// 	}
	// }

}



function isPrime(n) {
	if(n <= 1) return false;
	if(n <= 3) return true;

	if(n % 2 == 0 || n % 3 == 0) return false; 

	for(let i = 5; i * i <= n; i = i+ 6) {
		if(n % i == 0 || n %(i + 2) == 0) {
			return false;
		}
	}

	return true;
}


function allPrimesLessThanN(n) {
	for (let i = 0; i < n; i++) {
		if(isPrime(i)) {
			console.log(i);
		}
	}
}

goldbax(6);

goldbax(992);