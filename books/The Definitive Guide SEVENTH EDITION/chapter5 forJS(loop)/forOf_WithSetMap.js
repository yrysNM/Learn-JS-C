
//Set
let text = "Na na na na na na na na Batman!";
let wordSet  = new Set(text.split(" "));
let unique  = [];

for(let word of wordSet) {
	unique.push(word);
}

console.log(unique);


//Map
let m = new Map([[1, "one"]]);

for(let [key, value] of m) {
	console.log(key); // =>1
	console.log(value); //=> onem
}