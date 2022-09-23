//1)ANALYZING AND OPTIMIZING A PROPERTY CALL
function someLargeArray(){
	return new Array(1000000);
}

let exmapleObject = {
	"prop1": someLargeArray(),
	"prop2": someLargeArray()
}

function printProperty(props) {
	return props;
}

//console.log(printProperty(exmapleObject["prop1"]));



//2) ANALYZING AND OPTIMIZING SCOPE
function redGreenBlueCount(arr) {
	let RED = 0,
		GREEN = 1, 
		BLUE = 2,
		counter = new Array(3).fill(0);

	for(let i = 0; i < arr.length; i++) {
		let curr  = arr[i];
		if(curr == RED) {
			counter[RED]++;
		}else if(curr == GREEN) {
			counter[GREEN]++;
		}else if(curr  == BLUE) {
			counter[BLUE]++;
		}
	}
	return counter;
}

console.log(redGreenBlueCount([0,1,1,1,2,2,2])); // [1, 3, 3]
