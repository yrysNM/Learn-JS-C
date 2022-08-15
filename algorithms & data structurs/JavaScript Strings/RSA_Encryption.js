function modInverse(e, phi) {
	let m0 = phi, t, q;
	let x0 = 0, x1 = 1;

	if(phi == 1) {
		return 0;
	}

	while(e > 1) {
		//q is quotient 
		q = Math.floor(e / phi);
		t = phi;


		//phi is remainder now, process some as
		// Euclid's algo
		phi= e % phi, e = t; 

		t= x0; 

		x0 = x1 - q * x0; 
		x1 = t;
	}

	// make x 1position 
	if(x1 < 0) {
		x1 += m0;
	}

	return x1;
}

console.log(modInverse(7,40)); // 23


function isPrime(n) {
	if(n <= 1) return false;
	if(n <= 3) return true;


	//this is checked so that we can skip 
	// middle five nubers in below loop
	if(n % 2 == 0 || n % 3 == 0) return false;

	for(let i = 5;i * i <= n; i = i+ 6) {
		if(n % i == 0 || n %(i + 2) == 0){ 
			return false;
		}
	} 

	return true;								//  O(nsqrt(n)
}

function RSAKeyPair(p, q) {
	// Need to check that they are primes 
	if(!(isPrime(p) && isPrime(q))){
		return;
	}

	//Need to check that they're not the same
	if(p == q) {
		return;
	}

	let n= p * q, 
			phi = (p- 1) * (q - 1),
			e = 3,
			d = modInverse(e, phi);

	//public ket: [e, n] Private key: [d, n]

	return [[e, n], [d, n]];


}

console.log(RSAKeyPair(5, 11));