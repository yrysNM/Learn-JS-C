const modules = {};

function require(moduleName) {
	return modules[moduleName];

	modules["sets.js"]  = (function() {
		const exports = {};

		// The contents of the sets.js file go here;
		exports. BitSet = class BitSet { ... };


		return exports;
	}());

	modules["stats.js"] = (function() {
		const exports = {};

		// The contents of the stats.js file go here:

		const sum = (x, y) => x + y; 
		const square = x => x * x;
		exports.mean = function(data) { ... };
		exports.stddev = function(data) { ... };


		return exports;
	}());
}