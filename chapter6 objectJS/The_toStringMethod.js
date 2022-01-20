let s = {
	x: 1,
	y: 1
}.toString(); // s= [object, Object];

let point = {
	x: 1, 
	y: 2,
	toString: function() {
		return `(${this.x}, ${this.y})`;
	}
}; 

console.log(String(point)); // => (1,  2): toString() is used from string conversionsb
