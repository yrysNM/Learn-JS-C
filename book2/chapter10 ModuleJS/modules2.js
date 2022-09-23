const modules  = {};


function require(modulName) {
	return modules[modulName];
}



// Get references to the modules (or the module content) that we need
const stats = require("ModuleStatus.js");
const BitSet = require("../chapter9/Sets.js").BitSet;

//Now write code using those modules
let s= new BitSet(100);
s.insert(10);
s.insert(20);
s.insert(30);
let average = stats.mean([...s]);		//Average is 20

console.log(average);