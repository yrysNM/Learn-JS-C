function pascalTrangle(row, col) {
	if(col == 0) 
		return 1;
	else if(row == 0)
		return 0;
	else 
		return pascalTrangle(row -1, col) + pascalTrangle(row - 1, col - 1);
}

console.log(pascalTrangle(5,2));	// => 10 