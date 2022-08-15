let café = 1; // Define a variable using a Unicode character
console.log(caf\u00e9) // => 1; access the variable using an escape sequence
//caf\u{E9} // => 1; another form of the same escape sequence
console.log("\u{1F600}"); // Prints a smiley face emoji

let a = 3, b = 4, z = a, f = b;

let y = z + f * (a + b).toString();