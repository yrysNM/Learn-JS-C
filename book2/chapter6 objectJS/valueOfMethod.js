let point ={
	x: 3,
	y: 4,
	valueOf: function() {
		return Math.hypot(this.x, this.y);
	}
};

console.log(Number(point)); // => 5 valueOf() is  used for convertsions tonumbers;
console.log(point > 4 );
console.log(point > 5); 
