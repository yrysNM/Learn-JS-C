//indexOf()
function existsInString(stringValue, search) {
	return stringValue.indexOf(search) !== -1;
}

console.log(existsInString("red", "r"));				// => true
console.log(existsInString("red", "b"));				// => false


//Count "a"
let str = "He's my king from day util his last day";
let count = 0; 
let pos = str.indexOf('a');

while(pos !== -1) {
	count++;
	pos = str.indexOf("a", pos + 1);
	
}

console.log(count);										// => 3



//Regular Expressions

/* ^: Indicates the start of a string/line
\d: Finds any digit
[abc]: Finds any character between the brackets
[^abc]: Finds any character not between the brackets
[0-9]: Finds any digit between the brackets
[^0-9]: Finds any digit not between the brackets
(x|y): Finds any of the alternatives specified */
//Examples
let str1 = "JavaScript DataStructures";
let n = str1.search(/DataStructures/);
console.log(n);											// => 11

//Commonly Used Regexes 

// 1)Any numeric characters 
// /\d+/
let reg = /\d+/;
console.log(reg.test("123")); 							// => true
console.log(reg.test("33asad"));						// => true
console.log(reg.test("5asdash"));						// => true 
console.log(reg.test("asdash"));						// => false

console.log();
//2) Only Numeric Character
// /^\d+$/
let reg2 = /^\d+$/;
console.log(reg2.test("123"));							// => true
console.log(reg2.test("123a"));							// => false
console.log(reg2.test("a"));							// => false

console.log();
//3) Floating Numeric Characters
 // /^[0-9]*.[0-9]*[1-9]+$/
let reg3 =/^[0-9]*.[0-9]*[1-9]+$/; 
console.log(reg3.test("12"));							// => false
console.log(reg3.test("12.4"));							// => true

console.log();
//4)Only alphanumeric characters
//  /[a-zA-Zo-9]/
let reg4 = /[a-zA-Z0-9]/;
console.log(reg4.test("somethingElse"));				
console.log(reg4.test("hello"));
console.log(reg4.test("112a"));
console.log(reg4.test("112"));
console.log(reg4.test("^"));							// => false