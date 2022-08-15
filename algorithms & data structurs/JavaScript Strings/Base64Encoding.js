let encoding = window.btoa('hello I love learning to computer program');
// aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0
console.log(encoding);
console.log(encoding.atob("aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0"));
// // hello I love learning to computer program