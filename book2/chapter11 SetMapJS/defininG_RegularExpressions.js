let pattern  = /s%/;
//or 
let pattern2 = new RegExp("s$");


/* You can, however,
explicitly define your own Unicode character classes; for example,
/[\u0400-\u04FF]/ matches any one Cyrillic character.) \w Any ASCII word character. Equivalent to [a-zA-Z0-9_]. */

let r = /\d{2, 4}/; 	//MAth between two and four digits
r = /\w{3}\d?/;			// Match exactly three word characters and an optional digit
r = /\s+java\s+/;		// Match "java" with one or more spaces before and after 
r = /[^(]*/; 			// Math zero or more characters that are not open parens;

//Search
console.log("javaScript".search(/script/ui)); 		// => 4 
console.log("Python".search(/script/ui));			// => -1

//Replace 
// No matter how it is capitalized, replace it with the correct capitalization
console.log("Hello javaScript".replace(/javascript/gi, "JavaScript"));

// A quote is a quotation mark, followed by any number of
// nonquotation mark characters (which we capture), followed
// by another quotation mark.
let quote = /"([^"]*)"/g;
// Replace the straight quotation marks with guillemets
// leaving the quoted text (stored in $1) unchanged.
console.log('He said "stop"'.replace(quote, '«$1»')); // => 'He said «stop»'


//Match 
console.log("7 plus 8 equals 15".match(/\d+/g));	// => [ '7', '8', '15' ]