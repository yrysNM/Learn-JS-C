/* mainloop:while(token !== null) {
	//Code omitted ...
	continue mainloop; //Jump to the next iteration of the named loop
	//More  code omitted	
} */

let getData = () => {
	return [[1 , 2, 3],  [2,3, 9]];
}

let matrix = getData(); //Get  a 2D matrix of numbers of somewhere

//Now sum all the numer in the matrix
let sum = 0, success = false; 

//Strat with labeled statment that we can break out of if errors occus
computeSum: if(matrix) {
	for(let x =0; x< matrix. length; x++){
		let row = matrix[x];

		if(!row) break computeSum;

		for(let y = 0; y < row.length; y++) {
			let cell = row[y];

			if(isNaN(cell)) break computeSum;
			sum += cell;
		}
	}

	success = true;
}

console.log(sum);

// The break statements jump here. If we arrive here with
//success == false
// then there was something wrong with the matrix we were
//given.
// Otherwise, sum contains the sum of all cells of the
//matrix.

