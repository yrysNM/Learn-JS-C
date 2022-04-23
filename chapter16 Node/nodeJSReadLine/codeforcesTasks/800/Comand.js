const readLine = require("readline");

	
function checkCommand(arr, n) {
	let charArr = [];

	arr.forEach(item => {
		for(let v of item) {
			if(v != " ") {
				charArr.push(v);
			}
		}
	}); 
	let matrix = [];
	let obj = {};

	let count = {};
	
	while(charArr.length) {
		matrix.push(charArr.splice(0, 3));
	}	

	for(let i = 0; i< matrix.length;i++) {
		
		obj[i] = [matrix[i][0], matrix[i][1], matrix[i][2]];
	}

	let last;

	for(let[k, v] of Object.entries(obj)) {

		for(let i = 0; i < v.length; i++) {
			if(v[i] == "1") {
				count[k]++;
			}
		}
	}

	console.log(count);
	// for(let i =0; i< charArr.length; i++) {
	// 	if(charArr[i] == "1") {
	// 		count++;
	// 	}
	// }
 // 
	// return parseInt(count / 3);
}


function main() {
	const RL = readLine.createInterface(process.stdin, process.stdout);

	let linesArray = [];

	let resultArray = [];

	let linesArrayIndex = 0; 

	RL.on("line", (line) =>  {
		if(linesArrayIndex ==0) {
			linesArray[linesArrayIndex] = Number(line);

		}

		linesArray[linesArrayIndex] = line; 

		linesArrayIndex++;

		for(let  i in linesArray.slice(1)) {	
			resultArray[i] = linesArray.slice(1)[i];
		}

		if(resultArray.length == linesArray[0]) {
			//console.log(resultArray);
			console.log(checkCommand(resultArray, linesArray[0]));
			RL.close();
		}
	});
}

main();