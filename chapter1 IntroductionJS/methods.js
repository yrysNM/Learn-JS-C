let a= []; //Create an empty array

a.push(1, 2, 3); //THe push() method adds elements

console.log(a.reverse()); //another method: revers the order of elemtnts


function abs(x) { // a function to compute the absolute value
	if(x >= 0) return x;
	else {
		return -x;
	}


}
	console.log(abs(-10) === abs(10)); // => true


function sum(array) { //Compute the sum of the elements
	let sum =0; 

	for(let x of array) {
		sum  += x;
	}

	return sum;
}
let primes = [2, 3, 5, 7];
console.log(sum(primes));

function factotrial(n) {
	let product = 1; 
	while(n  > 1) {
		product *= n; 

		n--;
	}

	return product;
}

console.log(factotrial(4));

function factorial2(n) {
	let i, product = 1;
	for(let i = 2; i <= n; i++){
		product *= i;
	}

	return product;
}

console.log(factorial2(5));