const readLine = require('readline');

let mid = 25; 
let high = 50; 
let low = 1; 
let current = 13;
let found = -1;

if(current < mid) {
	mid = (current - low) / 2;
}else if(current > mid) {
	mid = (current +high) / 2;
}else {
	mid = (current + high) / 2;
}


function main() {
	let monthName;
	const RL = readLine.createInterface(process.stdin, process.stdout);
	RL.question("Enter a month number: ", (num) => {
		switch(String(num)) {
			case "1":
				monthName = "January"; 
				break;
			case '2':
				monthName = "February";
				break;
			case "3":
				monthName = "March";
				break;
			case "4": 
				monthName = "April"; 
				break; 
			case "5":
				monthName = "May";
				break;
			case "6": 
				monthName = "June";
				break;
			case "7":
				monthName = "July"; 
				break;
			case "8": 
				monthName = "August";
				break;
			case "9":
				monthName = "September"; 
				break;
			case "10": 
				monthName = "October"; 
				break; 
			case "11":
				monthName = "November"; 
				break;
			case "12":
				monthName = "December";
				break;
			default: 
				console.log("Bad Input");
		}
		console.log(`Month name ${monthName}`);
	});
}


main();