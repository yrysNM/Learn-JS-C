let oneDigitPrimes = new Set([2, 3, 5, 7]);

let product = 1;

oneDigitPrimes.forEach(n => {
	product *= n;
});

console.log(product); // => 210 2 * 3 * 5 * 7 