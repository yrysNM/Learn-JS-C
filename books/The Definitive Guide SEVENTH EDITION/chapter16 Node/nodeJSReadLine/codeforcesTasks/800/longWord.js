const readLine = require('readline');

function longStr(str) {
	if(str.length > 10) {
		return str[0] + String(str.length - 2) + str[str.length - 1];
	}
	return str;
}


function main() {
	const RL = readLine.createInterface(process.stdin, process.stdout);

	let linesArray = []; 

	let resultArray = []; 
	let linesArrayIndex = 0; 

	RL.on('line', (line) => {
		if(linesArrayIndex == 0)
		{
			linesArray[linesArrayIndex] = Number(line);
			// console.log('');
		}

		linesArray[linesArrayIndex] = line; 
		linesArrayIndex++;

		for(let i in linesArray.slice(1)) {
			resultArray[i] = linesArray.slice(1)[i];
		}

		if(resultArray.length == linesArray[0]) {
			resultArray.forEach(item => {
				console.log(longStr(item));
			});
			RL.close(longStr);
		}
	});
}

main();