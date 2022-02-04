// O(n^2) There are two nested loops. Ignore the constants in front of n
function someFunciton(n) {	
	for(let i = 0; i < n * 1000; i++){
		for(let j = 0;j < n * 20;j++){
			console.log(i + j);
		}
	}
}

//O(n^3) There are four nested loops, but the last loop runs only until 10
function someFunction2(n) {
	for(let i = 0;i < n;i++){
		for(let j = 0;j < n;j++){
			for(let k = 0;k < n;k++){
				for(let l =0; l < 10;l++){
					console.log(i + j + k + l);
				}
			}
		}
	}
}

// O(1)
// Constant complexity. The function runs from 0 to 1000. This does 
// not depend on n
function someFunction3(n)
{

	for(let i= 0; i < 10000; i++){
		console.log("hi");
	}
}

// O(n)
// Linear complexity. The function runs from 0 to 10n. Constants are 
// ignored in Big-O.
function someFunciton4(n) {
	for(let i = 0 ; i < n * 10; i++){
		console.log(n);
	}
}

// O(log2n)
// Logarithmic complexity. For a given n, this will operate only log2n
// times because i is incremented by multiplying by 2 rather than 
// adding 1 as in the other examples.
function someFunction5(n) {

	for(let i = 0; i < n; i * 2){
		console.log(n);
	}
}


//  O(∞)
// Infinite loop. This function will not end.
function someFunciton6(n) {
	while(true){
		console.log(n);
	}
}