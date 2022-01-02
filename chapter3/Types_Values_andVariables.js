let zero = 0;
let negz = -0;
console.log(zero === negz); // => true

console.log(1 / zero === 1 / negz); // => false Infinity not equal  -Infinity

let print = (ms) => {
	console.log(ms);
}


let x = .3 - .2; // thirty cents minus 20 cents
let y = .2 - .1; // twenty cents minus 10 cents
console.log(x === y);// => false: the two values are not the same!
console.log(x === .1); // => false: .3-.2 is not equal to .1
console.log(y === .1); // => trye .2 - .1 isequal to .1


console.log(BigInt(Number.MAX_SAFE_INTEGER)); // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
console.log(BigInt(string)); // => 10n**100n: one googol

let timesTamp = Date.now(); // The current time as a timesTamp (a number)
let now = new Date(); // The current time as a Date object
let ms = now.getTime(); // Convert to a millisecond
let iso = now.toISOString(); // Convert to a string in standart format;

console.log(`Now ${now} and time tamp ${timesTamp} 
			MS ${ms} 
			String ${iso}`);

let euro = "€";
let love = "❤";
print(euro.length); // => 1: this character has one 16-bit element
print(love.length) // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"




