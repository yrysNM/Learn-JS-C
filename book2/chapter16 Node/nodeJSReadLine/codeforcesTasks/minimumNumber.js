const readLine = require("readline");

function minimumNumber(num) {
	let sor = num.split("").sort();
	
	if(sor[0] != "0") {
		return sor.join("");
	}

	let index = 0;
	for(let i = 0; i< sor.length; i++) {
		if(sor[i] > "0") {
			index = i; 
			break;
		}
	}

	let temp= sor[0];
	sor[0] = sor[index];
	sor[index] = temp;

	return sor.join('');
}

console.log(minimumNumber("12534"));

// function main() {
// 	const RL = readLine.createInterface(process.stdin, process.stdout);
// 
// 	RL.on("line", (line) => {
// 		
// 	});
// }