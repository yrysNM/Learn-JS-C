// Print the name  and value of each property of o.Return undefined
function printprops(o) {
	for(let p in o) {
		console.log(`${p}: ${o[p]}\n`);
	}

}

// compute the distance  between  Cartesian points (x1, y1) and (x2, y2)
function distance(x1, y1, x2, y2){
	let dx = x2- x1;
	let dy = y2 = y1;

	return Math.sqrt(dx * dx + dy * dy);
}

//A recursice  function (one that calls itsels) that computes factorials
//Recall that x! is the product of x and all positive integer less than it
function factorial(x) {
	if(x <= 1) return 1;
	return x * factorial(x - 1);
}

console.log(printprops({x1: 1, x2: 3, y1: 1, y2: 5}));
console.log(distance(1, 3, 1,5));
console.log(factorial(3));