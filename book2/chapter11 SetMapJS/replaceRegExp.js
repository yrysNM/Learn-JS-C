let quote = /"(?<quotedText>[^"]*)"/g;

console.log('He said "stop"'.replace(quote, '«$<quotedText>»'));   // => He said «stop»


let s = "15 times 15 is 225";

console.log(s.replace(/\d+/gu, n => parseInt(n).toString(16)));   // => f times f is e1

