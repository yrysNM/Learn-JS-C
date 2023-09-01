//reference to an OBject
function memory() {
	return [1,2,3,4,5];
}
let foo = {
	bar1: memory(),			// 5kb  
	bar2: memory()			// 5kb
}

function clickEvent() {
	alert(foo.bar1[0]);
}


//Limiting Object References
//you should avoid using the entire object as a parameter.
//For example, do not do this:
let test = {
	prop1: "test"
}

function printProp(test) {
	console.log(test.prop1);
}

//printProp(test); 				// => test


//Instead, pass the property like this:
let testRec = {
	prop1: "test"
}

function printProp1(prop1) {
	console.log(prop1);
}
//printProp1(testRec.prop1);	// =>  test correctly print

//The delete operator
/* Always remember that the delete operator can be used to delete an unwanted object 
property (though it does not work on nonobjects) */
let testDel = {
	prop1: "test"
}

console.log(test.prop1);	// => test
delete test.prop1;
console.log(test.prop1);	// => undefined