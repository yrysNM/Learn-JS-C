function maximumPoints(k, costs) {
	costs.sort((a, b) => a - b);

	let sum = 0;
	let count = 0;

	for(let i =0; i < costs.length; i++) {

		val = costs[i];
		sum += val;

		if(sum > k) {
			break;
		}

		count++;
	}


	return count;
}


function maximumPoints(k, costs) {
	for(let i = 0; i < costs.length; i++) {
		for(let j = i; j < costs.length; j++) {
			if(costs[i] > costs[j]) {
				let temp = costs[i]; 
				costs[i] = costs[j];
				costs[j] = temp;
			}
		}
	}

	let add = 0, res =0;

	for(let i = 0;  i <= costs.length; i++) {
		let currentElement = costs[i]; 

		add += currentElement;

		if(add > k) {
			break;
		}

		res++;
	}


	return res;

}


//let k = 14, costs = [2, 4, 1, 8, 6];		// => 4
let k = 10, costs = [5, 2, 3, 1, 4];		// => 4

console.log(maximumPoints(k, costs));