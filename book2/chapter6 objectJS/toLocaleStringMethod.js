let point = {
	x: 1000,
	y: 2000,
	toString: function() {
		return `(${this.x}, ${this.y})`;
	},
	toLocaleString: function() {
		return `(${ this.x.toLocaleString() }, 
		${ this.y.toLocaleString() })`;
	}
};

console.log(point.toString()); // => (1000, 2000)
console.log(point.toLocaleString()); //=> (1 000, 		2 000)