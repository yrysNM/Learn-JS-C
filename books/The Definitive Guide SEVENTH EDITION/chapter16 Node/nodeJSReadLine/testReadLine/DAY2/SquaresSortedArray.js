const readLine = require("readline");



/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var sortedSquares = function(nums) {
 	let sqarr = []; 

 	for(let i =0; i < nums.length;i++) {
 		sqarr.push(Math.pow(nums[i], 2));
 	}


 	return sqarr.sort((a , b) => a - b);
};


function main() {
	const RL = readLine.createInterface(process.stdin, process.stdout); 
	let n = 0, count, arr = []; 
	RL.question("Length Array?:: ", (length) => {
		n = length;

	});

	RL.on("line",(line) => {
		if(n) {
			let newNumber = line.split(" ");
			arr.push(...newNumber);
			n--;
		}
		console.log(sortedSquares(arr));
		// let newNumbers = line.split(" ");
		// arr.push(...newNumbers);
		// count++;
		// if(n == count) {
		// 	console.log(sortedSquares(arr));
		// }
	});
}

main();