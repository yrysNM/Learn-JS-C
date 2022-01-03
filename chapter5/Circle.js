class Circle {
	constructor(radius) {
		this.r = radius;
	} 

	area() {
		return Math.PI * this.r *  this.r;
	}

	circumference() {
		return 2 * Math.PI * this.r;
	}
}

let c = new Circle(5);
console.log(c.area());
console.log(c.circumference());