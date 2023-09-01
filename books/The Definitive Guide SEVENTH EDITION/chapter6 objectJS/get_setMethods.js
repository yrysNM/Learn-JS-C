let p = {
	x: 1.0,
	y: 1.0,
	// r is a read-write accessor property with getter and setter.
	// Don't forget to put a comma after accessor methods.

	get r() {
		return Math.hypot(this.x, this.y);
	},
	set r(newValue){
		let oldValue = Math.hypot(this.x, this.y);
		let ratio = newValue / oldValue;
		this.x  *= ratio; 
		this.y  *= ratio;
	},

	get theta() {
		return  Math.atan2(this.y, this.x);
	}
};

console.log(p.r); // =>  1.4142135623730951

console.log(p.theta); // => 0.7853981633974483

