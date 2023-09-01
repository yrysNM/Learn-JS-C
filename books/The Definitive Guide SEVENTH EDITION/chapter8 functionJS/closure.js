let scope = "gloval scope";  		//A gloval variable
function checkscope() {
	let scope = "local scope";		// a local variable
	function f() {
		return scope;				// return the value in scope here

	}


	return f();
}

console.log(checkscope());			// => local scope

let scope2 = "global scope"; 
function checkscope2() {
	let scope = "local scope"; 		// A local variable
	function f() { return scope; }  // return value in scope here

	return f;
}

let s = checkscope2()();			// => local scope
