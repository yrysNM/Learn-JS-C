let o = {
	m: function() {		  			//Method n of the object.
		let self = this;			//Save the this value in a variable

		console.log(this === o);	// => tue; this is the object o 
		f();						// Now call the helper function f()
					
		function f() {				// A nested function f

			console.log(this === o);// => false: this is global or  undefined

			console.log(self === o);// => true seld is the outer this value
		}
	}
};

console.log(o.m());					// Invoke  the  method m on the object 0