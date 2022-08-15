let a = [1, 2, 3];
let b = [0, ...a, 4]; // b == [0, 1, 2, 3, 4];

for(let v of b){
	console.log(v);
}

let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0; //Modifying the copy does not change the original
console.log(copy);
console.log(original);

changeString("yrys_NM");

let digits = [..."0123456789ABCDEF"];
console.log(digits);

function changeString(str) {
	let digits = [...str];
	console.log(digits);
}

//Without duplicate
let letters =[..."hello world"];
console.log([...new Set(letters)]); // =>   'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd'
