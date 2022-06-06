//O(n) 
function exampleLinear(n) {
	for(let i = 0; i < n;i++){
		console.log(i);
	}
}

//o(n^2)
function exampleQuadratic(n) {
	for(let i = 0; i < n; i++){
		console.log(i);
		for(let j =i; j < n; j++) {
			console.log(j);
		}
	}
}

//o(n^3)
function exampleCubic(n) {
	for(let i = 0;i < n;i++){
		console.log(i);
		for(let j = i;j < n;j++){
			console.log(j);
			for(let k = j; k < n; k++) {
				console.log(k);
			}
		}
	}
}

//Best o(logn)
function exampleLogoraithmic(n) {
	for(let i = 2; i <= n; i = i * 2){
		console.log(i);
	}
}
exampleLogoraithmic(70);

//If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k > 0.
function a(n) {
	let count =0; 
	for(let i= 0; i < n;i++){
		count += 1; 
	}

	return count;
}

/* ⬆ This means that both 5f(n) and f(n) have the same Big-O notation of O(f(n)).
Here is an example of a code block with a time complexity of O(n): */
function a5(n) {
	let count =0; 
	for(let i= 0;i < 5 * n;i++){    //This block has f(n) = 5n
		count += 1;
	}

	return count;
}

/* If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n)) */
function addBigO(n) {				// f(n) = 5n
	let count =0; 
	for(let i = 0; i< n;i++){
		count += 1;
	}
	
	for(let i = 0; i < 5 *n;i++){
		count += 1;
	}

	return count;
}

/* If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n)) */
function miltiplyBigO(n) {			// f(n) = 5n*n
	let count =0; 
	for(let i = 0;i < n;i++) {
		count += 1; 
		for(let i = 0; i < 5 * n;i++){
			count += 1;
		}
	}

	return count;
}

/* If f(n) is a polynomial of degree k, then f(n) is O(n^k). */
function PolynomialRule(n) {		// f(n) = nˆ2
	let count = 0;
	for(let i = 0; i < n * n;i++){
		 count += 1;
	}

	return count;
}
