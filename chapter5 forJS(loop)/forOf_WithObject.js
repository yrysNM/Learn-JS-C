let o = {
	x: 1,
	y: 2,
	z: 3
};

/* for(let element of o) {//Throws Type Errorbecouse o is not iterable
	console.log(element)
} */

let keys = "";
for(let k of Object.keys(o)) {
	keys += k;
}

console.log(keys);

let sum = 0; 
for(let b of Object.values(o)) {
	sum += b;
}

console.log(sum);

let pairs = "";
for(let [k, v] of Object.entries(o)) {
	pairs += k + v;
}

console.log(pairs);