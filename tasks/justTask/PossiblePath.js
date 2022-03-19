function solve(a, b, x,  y) {
	let baseCase  = [x,  y]; 
	

	return (gcd(a,b) ==  gcd(x, y)) ? "YES" : "NO";

}

const gcd = (a,b) => {
	if(!b){
		return a;
	}

	return gcd(b,  a % b); 	
};

//solve(1471922852, 714664297, 860782108, 1824439163);
console.log(solve(1, 1, 2, 3));
//solve(3299, 7314, 6015, 6906);
console.log(solve(5564, 1059, 4129, 3475));
console.log(solve(7545, 2436, 3299, 4059));

