const modules  = {};
function require(modulName) {
	return modules[modulName];
}

modules["ModuleSets.js"] = (function() {
	const exports = {};

	// The contents of the sets.js file go here
	exports.BitSet = class BitSet { ... };

	return exports;
}());

modules["ModuleStatus.js"] = (function() {
	const exports = {};

	const sum = (x, y) => x + y;
	const square =  x =>  x * x;

	exports.mean = function(data) { ... };
	exports.stddev = function(data) { ... };


	return  exports;
}());




