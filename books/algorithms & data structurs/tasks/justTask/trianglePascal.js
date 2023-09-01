function Recursionpascal_triangle(n) {
	if(n === 0) return [[1]];

	const previousValue = pascal_triangle(n - 1);

	const lastValueOfPrevious = previousValue[previousValue.length - 1];

	const currentValue = lastValueOfPrevious.reduce((acc, num, i) => {
		if(lastValueOfPrevious[i + 1] != undefined) {
			acc.push(lastValueOfPrevious[i] + lastValueOfPrevious[i + 1]);
		}else {
			acc.push(1);
		}

		return acc;
	}, [1]);

	const result = [...previousValue, currentValue];

	return result;
}

function LoopPascal_Trangle(n) {
	if(n === 0) return [];
	if(n === 1) return  [[1]];

	let result =[]; 

	for(let row = 1; row <= n;  row++) {
		let arr = [];

		
		for(let col = 0; col <  row; col++){
			
			if(col === 0|| col === row - 1) {
				arr.push(1);
			}else {
				console.log(result);
				arr.push((result[row - 2][col - 1] + result[row - 2][col]));
			}

		}
		//console.log(arr);
		result.push(arr);
	}

	return result;
}

console.log(LoopPascal_Trangle(6));