function getNthFibo(n) {
	if(n <= 1) return n; 

	let sum  = 0,
		last = 1,
		lastLast = 0;

	for(let i = 1; i < n; i++) {
		sum = lastLast + last; 
		lastLast = last; 
		last = sum;
	} 

	return sum;
}

//recursive solution: fibonacci
function getNthFiboRecursion(n) {
	if(n <= 1) return n;
	else {
		return getNthFibo(n - 1) + getNthFibo(n - 2);			// o(2^n)
	}
}

// console.log(getNthFibo(8));
// console.log(getNthFiboRecursion(8));



//tail recursion
function getNthFiboBetter(n, lastLast, last) {
	if(n == 0) {
		return lastLast;
	}
	if(n == 1) {
		return last;
	}

	return getNthFiboBetter(n - 1, last, lastLast + last);		// o(n)
}

console.log(getNthFiboBetter(8, 0, 1));
