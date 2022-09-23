
//1) spiral print 
let M = [
	[1, 2, 3, 4, 5],
	[6,7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20]

]


function spiralPrint(M) {
	let topRow = 0, 
   		leftCol = 0, 
   		btmRow = M.length - 1, 
   		rightCol = M[0].length - 1;

   		while(topRow < btmRow && leftCol < rightCol ){
   			for(let col = 0; col <= rightCol; col++) {
   				console.log(M[topRow][col]);
   			}
   			topRow++;

   			for(let row = topRow; row <= btmRow; row++){
   				console.log(M[row][rightCol]);
   			}
   			rightCol--;
   			if(topRow <= btmRow){
   				for(let col = rightCol; col >= 0; col--){
   					console.log(M[btmRow][col]);
   				}
   				btmRow--;
   			}

   			if(leftCol <= rightCol ) {
   				for(let row = btmRow; row > topRow; row--){
   					console.log(M[row][leftCol]);
   				}
   				leftCol++;
   			}
   		}							// => time complexity: o(mn)
   									// => space complexity: o(1)
}

spiralPrint(M);						// => print like spirals



// 2) tic-tac-toe check 
function checkRow(rowArr, letter){
	for(let i = 0; i < 3; i++) {
		if(rowArr[i] != letter) {
			return false;
		}
	}
	return true;
}

function checkColumn(gameBoardMatrix, columnIndex, letter) {
	for(let i = 0;i < 3;i++) {
		if(gameBoardMatrix[i][columnIndex] != letter) {
			return false;
		}
	}

	return true;
}

function ticTacToeWinner(gameBoardMatrix, letter) {
	//check rows
	let rowWin = checkRow(gameBoardMatrix[0], letter) || 
				 checkRow(gameBoardMatrix[1], letter) || 
				 checkRow(gameBoardMatrix[2], letter);

	let colWin = checkColumn(gameBoardMatrix, 0, letter) ||
				 checkColumn(gameBoardMatrix, 1, letter) ||
				 checkColumn(gameBoardMatrix, 2, letter);
	
	let diagonalWinLeftToRight = (gameBoardMatrix[0][0] == letter &&
								  gameBoardMatrix[1][1] == letter &&
								  gameBoardMatrix[2][2] == letter);
	
	let diagonalWInRightToLeft = (gameBoardMatrix[0][2] == letter &&
								  gameBoardMatrix[1][1] == letter &&
								  gameBoardMatrix[2][0] == letter)

	return rowWin || colWin || diagonalWinLeftToRight || 
			diagonalWInRightToLeft;

}

let board = [
	["O", "X", "O"],
	["x", "X", "O"],
	["x", "O", "X"]
];

if(ticTacToeWinner(board, "X")) {
	//console.log("Here, X won: ");
	board.forEach(items => {
		//console.log(items.join(" "));
	});
}else if(ticTacToeWinner(board, "O")) {
	
	//console.log("Here, O won: ");
	board.forEach(items => {
	//	console.log(items.join(" "));
	});
}
//console.log("DRAW :)");




//3) Path finding 
let boardPath = 
`%e%%%%%%%%%\n%...%.%...%\n%.%.%.%.%%%\n%.%.......%\n%.%%%%.%%.%\n%.%.....%.%\n%%%%%%%%%x%`;
let rows = boardPath.split("\n");

function generateColumnArr(arr) {
	return arr.split("");

}

let mazeMatrix = rows.map(generateColumnArr);

function findChar(char, mazeMatrix) {
	let row = mazeMatrix.length,
		column  = mazeMatrix[0].length;

	for(let i = 0;i < row; i++ ) {
		for(let j = 0;j < column; j++) {
			if(mazeMatrix[i][j] == char) {
				return [i, j];
			}
		}
	}
}


function printMatrix(matrix) {
	let mazePrintStr = "", 
		row = matrix.length, 
		column = matrix[0].length;

	for(let i = 0; i < row; i++) {
		for(let j = 0;j < column;j++) {
			mazePrintStr += mazeMatrix[i][j];
		}
		mazePrintStr += "\n";
	}
	console.log(mazePrintStr);
}

/*  
 Up: path(x+1,y)
 Right: path(x,y+1)
 Down: path(x-1,y)
 Left: path(x,y-1)  
 */

function mazepathFinder(mazeMatrix) {
	let row = mazeMatrix.length, 
		column = mazeMatrix[0].length, 
		startPos = findChar("e", mazeMatrix),
		endPos  = findChar("x", mazeMatrix);

	path(startPos[0], startPos[1]);

	function path(x, y) {
		if(x > row - 1 || y > column  - 1 || x < 0 || y < 0) {
			return false;
		}

		// Found
		if(x == endPos[0] && y == endPos[1]) {
			return true;
		}

		if(mazeMatrix[x][y] == "%" || mazeMatrix[x][y] == "+") {
			return false;
		}

		//Mark the current spot
		mazeMatrix[x][y] = "+";
		printMatrix(mazeMatrix);

		if(path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) {
			return true;
		}

		mazeMatrix[x][y] = ".";
		return false;				
	}
	/* 
		Time Complexity: O(mn)
		Space Complexity: O(1)
		Here, m is the row length, and n is the column length. Each element is visited only once
	 */
}
//console.log(mazepathFinder(mazeMatrix));	




//4) Matrix Rotation


function rotateMatrix90Left(mat) {
	let N = mat.length;

	//Consider all squares one by one
	for(let x = 0; x < N / 2;x++) {

		//consider elements in group of 4 in 
		//current square
		for(let y = x; y < N - x -1; y++) {
			//store currrent cell in temp variable

			let temp = mat[x][y];

			//nmove values from  right to top 
			mat[x][y] = mat[y][N - 1 - x];

			//move values from bottom to right
			mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];

			//move values form left to bottom
			mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];

			// asign temp to left
			mat[N - 1 - y][x] = temp
			
		}

	}
	/* Time Complexity: O(mn)
		Space Complexity: O(1)
	 */
}

let matrix = [
	[1, 0, 1],
	[0, 0, 1],
	[1, 1, 1]
   
];
// 
// rotateMatrix90Left(matrix);
// 
// matrix.forEach(elem => {
// 	console.log(elem.join(""));
// });
