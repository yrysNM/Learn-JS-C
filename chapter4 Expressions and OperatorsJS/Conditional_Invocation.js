function square(x, log) { // The second argument is an optional function

	if(log) {// if the optional function is  passed
		log(x); //Invoke it
	}

	return x * x; // return the square of the  argument
}

//conditional invocation syntax
function square2(x, log) { //The second argument is an optional functon
	
	log?.(x); //Call the function if there is one

	return x * x; // Return the square ofthe augument
}

console.log(square2(3));

let f = null, x= 0;
try{
	f(x++); //Throws Type Error becouse f is null
}catch(e) {
	console.log(x); // => 1 
}

console.log(f?.(x++)); 
