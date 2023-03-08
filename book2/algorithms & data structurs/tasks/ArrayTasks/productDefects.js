function convertIntChar(samples) {
	let matrix = Array.from(Array(samples.length), () => Array(samples[0].length));
	for(let i =0; i< samples.length; i++) {
		for(let j= 0; j < samples[0].length; j++) {
			matrix[i][j] = String(samples[i][j]);
		}
	}

	return matrix;
}



function largestArea(samples) {
	let matrix = convertIntChar(samples); 

	let m = matrix.length, n = m > 0 ? matrix[0].length : 0;
    let memo = new Array(m).fill('0').map(() => new Array(n).fill('0'));
    let max = 0;    
    
    const dp = function(i,j) {                 
        // out of range, can not form a square
        if (i == -1 || j == -1) {
            return 0;
        }

        if ('0' == matrix[i][j]) {
            memo[i][j] = 0; 
            dp(i-1, j-1);
            dp(i-1, j);
            dp(i, j-1);
            return 0;
        }
        
       
        if ('0' === memo[i][j]) {
            memo[i][j] = Math.min(dp(i-1, j-1), dp(i-1, j), dp(i, j-1)) + 1;
        }

       
        if (memo[i][j] > max) {
            max = memo[i][j];
        }

        return memo[i][j];
    }

    dp(m-1,n-1);    

   
    return max;
}


// function largestArea(samples) {
// 
// 	let matrix = convertIntChar(samples);
// 	
// 	let rows = matrix.length,
// 		col =  rows > 0 ? matrix[0].length : 0;
// 	console.log(matrix);
// 	let dp = new Array(col + 1);
// 
// 	let maxsqLen= 0, prev = 0;
// 
// 	for(let i = 1; i <= rows; i++) {
// 		for(let j = 1;  j <= col; j++) {
// 			let temp = dp[j]; 
// 
// 			if(matrix[i - 1][j - 1] == '1') {
// 				  dp[j] = Math.min(Math.min(dp[j - 1], prev), dp[j]) + 1;
// 				  console.log(dp[j]);
// 				  maxsqLen = Math.max(maxsqLen, dp[j]);
// 
// 			}else {
// 				dp[j] = 0;
// 			}
// 			prev = temp;
// 		}
// 	} 
// 
// 	return maxsqLen * maxsqLen;
// 
// 	// for(let i = 1; i <= rows; i++) {
// 	// 	for(let j = 1;  j <= col; j++) {
// 	// 		if(matrix[i - 1][j - 1] == '1') {
// 	// 			dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
// 	// 			maxsqLen = Math.max(maxsqLen, dp[i][j]);
// 	// 		}
// 	// 	}
// 	// }
// 	// console.log(maxsqLen);
// 	// return maxsqLen * maxsqLen;
// }


let samples = [
	[1, 1, 1, 1, 1],
	[1, 1, 1, 0,  0],
	[1, 1, 1, 0,  0],
	[1, 1, 1, 0, 0],
	[1, 1, 1, 1,  1]

];

let grid = [    
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]]

console.log(largestArea(samples));