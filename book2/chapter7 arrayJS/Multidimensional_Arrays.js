// create a multidimensional array
let table = new Array(10); // 10 rows of the table

for(let i = 0; i < table.length; i++) {
	table[i] = new Array(10); // Each row has 10 columns
}

//Initialize th array
for(let row = 0; row <  table.length; row++) {
	for(let col = 0; col < table[row].length; col++){
		table[row][col] = row * col;
	}
}

//use the multidimensional array to compute 5 * 7
console.log(table[5][7]); // => 35; 
console.log(table[9][9]); // => 81
