// This is how we could a stats module
const stats = (function() {
	// Utility functions private to the module
	const sum = (x, y) => x + y;
	const square = x => x * x;

	// A public function that will  be exported
	function mean(data) {
		return data.reduce(sum) / data.length;

	}


	// A public function that we will export 
	function stddev(data) {
		let m = mean(data);
		return Math.sqrt(
				data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)

			);
	}

	// We export the public function as properties of an object
	return { mean, stddev };
}());

console.log(stats.mean([1, 3, 5,  7, 9]));
console.log(stats.stddev([1, 3, 5, 7, 9]));
