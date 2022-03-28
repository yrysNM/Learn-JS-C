let gcd = function(a, b) {
	if(!b) {
		return a;
	}

	return gcd(b, a % b);
};

console.log(gcd(1,1));
console.log(gcd(2, 3));
