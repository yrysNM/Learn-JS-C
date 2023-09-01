// A trivial Array subclass that adds getters for the first and last elements.
class EZArray extends Array {
	get first(){
		return this[0];
	}

	get last() {
		return this[this.length - 1];
	}
}

let a = new EZArray();

console.log(a instanceof EZArray);
console.log(a instanceof Array);

a.push(1, 2, 3, 4);
console.log(a.pop());				//=> 4 anothe inherited method
console.log(a.first);
console.log(a.last);
console.log(a[1]);					// => 2 reqular array access sntax still workd
console.log(Array.isArray(a));
console.log(EZArray.isArray(a));

