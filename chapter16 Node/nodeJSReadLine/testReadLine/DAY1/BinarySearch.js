const readLine = require("readline");

function binarySearch(arr,target) {
	let left= 0,
		right = arr.length- 1;
	console.log(arr);
	while(left<= right) {
		let mid = Math.floor((left + right) /  2);

		if(arr[mid] == target) {
			return mid;
		}else if(arr[mid] < target) {
			left = mid + 1;
		}else {
			right = mid - 1;
		}
	}

	return -1;
}


function main() {

	const rl = readLine.createInterface(process.stdin, process.stdout);

	let arr = [];
	let tar;
	let num = 0;
	rl.question("Length array?: ", (n) => {
	//	for(let i = 0; i<n; i++) {

		num = n;
	//	}
	});
	let count = 0;
	rl.on("line", (line) => {
		let newNumbers = line.split(" ");
		arr.push(...newNumbers);
		console.log(newNumbers, arr);
		count++;

		if(num == count) {
			rl.question("Target: ", (target) =>  {
				//console.log(target);
				console.log(binarySearch(arr, target));
			});

		}
	});


}

main();