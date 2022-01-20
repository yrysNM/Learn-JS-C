let s = new Set(); 			//A  new, empty set 
//let t= new Set([1, s]);		// A new set with two members

let  t = new  Set(s);		// A new set that copies
let unique = new Set("Missisippi");  // 4 elements: "M", "i", "s", and "p"

console.log(unique.size);
console.log(unique);

