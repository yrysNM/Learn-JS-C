// function cartesian(...args) {
// 	let r = [], max = args.length - 1;
// 
// 	function helper(arr, i) {
// 		for(let j = 0, l= args[i].length; j < l; j++) {
// 			let a = arr.slice(0);		// clone arr
// 			a.push(args[i][j]);
// 
// 			if(i == max) {
// 				r.push(a);
// 			}else {
// 				helper(a, i + 1);
// 			}
// 		}
// 	}
// 		helper([], 0);
// 		return r;
// }


let perArr = [],
	usedChars = [];

function permute(input) {
	let i, ch;
	for(i= 0; i < input.length; i++) {
		ch = input.splice(i, 1)[0];
		usedChars.push(ch);

		if(input.length == 0) {
			perArr.push(usedChars.slice());

		}

		permute(input);
		input.splice(i, 0, ch);

		usedChars.pop();

	}

	return perArr;
}

 let test = [1, 2, 3];
// console.log(test.flatMap(d => test.map(v => d + v)));
console.log(permute(test));