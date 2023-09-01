function pascal(row, column) {
	if(column > row) {
		return 0;
	}

	if(column <= 1 || row <= 1) {
		return 1;
	}

	return pascal(row - 1, column) + pascal(row - 1, column - 1);
}

function triangle(number) {
	let string = "";
	for(let row = 1; row <= number; row++) {
		for(let column = 1; column <= row; column++){
			string += `${pascal(row, column)} `;
		}

		string += "\n";
	}

	console.log(string + " ");
}

triangle(6);