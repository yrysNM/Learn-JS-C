const sum = (x, y) => x + y;

const polynomial = x  => x * x + 2 * x + 3;

const f = x => {return  {value: x}; };   //Good: f();
const g = x => ({value: x}); 		     // Good: g();
const h = x => {value: x};				//Bad: h() returns nothing
//const i = x => {v: x, w: x}; 			// Bad:syntax ERror

console.log(f());
console.log(g());
console.log(h());
//console.log(i());
console.log(sum(1,5));
console.log(polynomial(2));	