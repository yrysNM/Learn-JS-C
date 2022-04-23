const readLine = require('readline');

function check(num) {
// 	if((num % 2) == 0 && num > 2) {
// 		return "YES";
// 	}
// 
// 	return "NO";

	return (num % 2 == 0) && num > 2 ? "YES" : "NO";
}


function main() {
	const RL = readLine.createInterface(process.stdin, process.stdout);

	RL.on("line", (line) => {
		console.log(check(line));
	});
}

main();