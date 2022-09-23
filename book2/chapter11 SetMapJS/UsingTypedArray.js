// Return the largest prime smaller than n, using the sieve of Eratosthenes
function seive(n) {
	let a= new Uint8Array(n + 1); 				// a[x] will be 1 if x is composite
	let max = Math.floor(Math.sqrt(n));			// DOn;t do factors higher than this
	let p = 2;									// 2 is the first prime

	while(p <= max) {							//For primes less than max

		for(let i = 2 * p; i <= n; i++) {		//// Mark multiples of p as composite

			a[i] = 1;
		}
		
			while(a[++p])  /* empty */;			// The  next unmarked index is prime

		
	}

		while(a[n]) n--;						// Loop backward to find the  lsat prime

		return n;								// And return id
	
}

let  ints = new Int16Array([0, 1,2, 3, 4, 5,6, 7, 8, 9]);

console.log(seive(ints))