let a = ["a", "b", "c"];

let  b = [];

for(let i = 0;i < a.length;i++) {
	b[i] = a[i] //copy an elment of into b;
}

let c = Array.from(b); // IN Ec6 copy arrays with Array.from();
console.log(`Array1 ${a}, Array2 ${b}, Array3 ${c}`);

function  equalArrays(a, b) {
	if(a == b) return true; //Indentical arrays are equal 

	for(let i = 0;i < a.length; i++) {
		if(a[i] !== b[i]) return false; // if any differ arrays not equal


	}

	return true; //Toherwise they are equal
}

c[2] = "s";

console.log(equalArrays(a, b));
console.log(equalArrays(b, c));