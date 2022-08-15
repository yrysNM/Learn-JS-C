let text = "testing: 1, 2, 3"; // Sample text
let pattern = /\d+/g; // Matches all instances of one or more digits
console.log(`${text}  ${pattern}`);

console.log(pattern.test(text)); // => true a match exists
console.log(text.search(pattern)); //// => 9: position of first match
console.log(text.replace(pattern, "#"));
console.log(text.split(/\D+/));
