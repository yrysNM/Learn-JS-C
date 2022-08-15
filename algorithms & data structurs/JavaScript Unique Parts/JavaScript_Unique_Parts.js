let test = "sss";
console.log(test);				//global variable

//🐱‍👤
//Declaration with var: Functional Scope
function scope1() {
	var top = "top";
	bottom= "bottom";

	console.log(bottom);
	var bottom;
}
scope1()						// => bottom - no error

function scope2(print){
	if(print){
		var insideIf = "12";
	}

	console.log(insideIf);
}

scope2(true);					// => "12" - no error

let a= 1; 
function four() {
	if(true) {
		var a = 4;
	}
	console.log(a);				// => 4  was printed, not the global value of 1, because it was redeclared and available in  that scope
}
four();

//😸
//Declaration with let: Block Scope
function scope3(print) {
	if(print){
		let insideIf = "12";

	}
	console.log(insideIf);
}

//scope3(true);					// => "insideIf is not defined"


//🐱‍👓
//Equality and Types
let printifTrue = "";

if(printifTrue) {
	console.log("truthy");
}else {
	console.log("Falsey");	    // => Falsey
}


//=== VS == 
/* 1 "5" == 5 // returns true
2 "5" === 5 // returns false */


//Objects
let o1 = {};
let o2 = {};

console.log(o1 == o2);			// => false
console.log(o1 === o2);			// => false

function isEquivalent(a, b) {
	// arrays of property names
	let aProps = Object.getOwnPropertyNames(a);
	let bProps = Object.getOwnPropertyNames(b);

	// if their property length are different, they're different objects
	if(aProps.length != bProps.length) {
		return false;
	}

	for(let i = 0;i < aProps.length; i++) {
		let propName = aProps[i];

		// if the valeus of the property are diffrent not equal
		if(a[propName] !== b[propName]) {
			return false;
		}
	}

	// if everything mathed, correct
	return true;
}

console.log(isEquivalent({"hi": 12}, {"hi": 12}));  		// => true