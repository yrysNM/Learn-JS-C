let s = Symbol.for("shared");
let t = Symbol.for("shared");

console.log(s === t);
console.log(s.toString());
console.log(Symbol.keyFor(t));