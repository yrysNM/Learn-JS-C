let DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")

function encode(num) {
	let base = DICTIONARY.length; 
	let encoded = "";

	if(num === 0) {
		return DICTIONARY[0];
	}

	while(num > 0) {
		encoded += DICTIONARY[(num % base)];
		num = Math.floor(num / base);

	}

	 return reverseWord(encoded);
}

function reverseWord(str) {
	let reversed = "";
	for(let i = str.length-1; i >= 0; i--) {
		reversed += str.charAt(i);
	}

	return reversed;
}

function decodeId(id) {
	let base = DICTIONARY.length; 
	let decoded = 0;

	for(let index = 0; index <  id.split("").length; index++) {
		decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
	}

	return decoded;
}

console.log(encode(8.646625908249646e+77));					// prints "VhU2"
console.log(decodeId("https://leetcode.com/problems/design-tinyurl"));