let bytes = new Uint8Array(1024); 			//A 1K buffer
let pattern = new Uint8Array([0, 1, 2, 3]); // An array of 4 bytes

bytes.set(pattern); 		//Copy them to the start of another byte array
bytes.set(pattern, 4);		// Copy them again at a different offset
bytes.set([0, 1, 2, 3], 8); // Or just copy values direct from a regular array
console.log(bytes.slice(0, 12));			
/* Uint8Array(12) [
  0, 1, 2, 3, 0,
  1, 2, 3, 0, 1,
  2, 3
] */


//Subarray
let  ints = new Int16Array([0, 1,2, 3, 4, 5,6, 7, 8, 9]); 	//10 short integers
let last3 = ints.subarray(ints.length - 3, ints.length); 	//  Last 3 of them

console.log(last3[0]);		// => 7 this is the same ints[7]

ints[9] = -1; 				// Change a value in the original array and ..
console.log(last3[2]);		// => -1 it al changes in thee subarray

last3.buffer; 				// The ArrayBuffer object for a typed array

console.log(last3.buffer === ints.buffer); 		// => true both are view of the same buffer
console.log(last3.byteOffset);					// => 14 this view starts ar byte 14 of the buffer

console.log(last3.byteLength);					// => 6 this view is 6 bytes (3 16-bit ints) long
console.log(last3.buffer.byteLength);			// => 20 but the underlying buffer has 20 bytes

/* always be true:
a.length * a.BYTES_PER_ELEMENT === a.byteLength // => true */


