function Matrix(rows, columns) {
	let jaggedarray = new Array(rows);

	for(let i = 0; i < columns;i ++){
		jaggedarray[i] = new Array(rows);
	}

	return jaggedarray;
}

console.log(Matrix(3, 3));

let matrix3by3  = [[1, 2, 3], [4, 5,6],[7, 8, 9]];
console.log(matrix3by3[0]);			// =>  1, 2, 3
console.log(matrix3by3[1]);			// => [4,5 , 6]
console.log(matrix3by3[2]);			// => [7, 8,9]

console.log(matrix3by3[0][1]);