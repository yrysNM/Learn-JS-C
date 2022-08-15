const readLine = require('readline');


function main() {
	var RL = readLine.createInterface(process.stdin, process.stdout);

	RL.question("What is your name?", (name) =>  {
		console.log(name);
	});
}

main();