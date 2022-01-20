class Point { //By convention, class names are copitalized
	
	constructor(x, y) { //Constructor function to initialize new instances
		this.x = x;  // This keyword is the new object being initialized
		this.y = y; //Sotr function arguments as object properties
	} 

	destance() { //Method to compute ditance from origin to point 
		return Math.sqrt(
			this.x * this.x + this.y * this.y
		);
	}

}

let p = new Point(1,  1);
console.log(p.destance());