let  letters = [..."Hello World"]; // an array of letters
let  string = "";

for(let letter of letters) {
	string += letter;
}

console.log(string); // => Hello World ; we reassembled the original tex

let everyother = ""; 

for(let [index, letter] of letters.entries()) {
	if(index % 2 === 0) everyother += letter;  // letters at even indexes
 
}

console.log(everyother);

let uppercase = "";

letters.forEach(letter => { // Note arrow function syntax here
	uppercase += letter.toUpperCase();
});

console.log(uppercase);

let vowels = ""; 
for(let i = 0;i < letters.length; i++) { // for each index in the array
	let letter = letters[i]; // get the element at that index
	
	if(/[aeiou]/.test(letter)) { //use a reqular expression test
		vowels += letter;
	}
} 

console.log(vowels);


//Save the array  length into a local variable
for(let i =0, len = letters.length; i < len;i++ ) {
	//loop body remains the same
}

//iterate backwards from the end of the array to the start
for(let i = letters.length - 1; i >= 0; i--){
	// loop body remains the same
}

let a = new Array();
for(let i = 0;  i < a.length; i++) {
	if(a[i] === undefined) continue; //Skip undefined + nonexistent elements 

	//loop body here
}	
