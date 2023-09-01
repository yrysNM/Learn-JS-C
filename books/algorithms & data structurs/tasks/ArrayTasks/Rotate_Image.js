/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let N = matrix.length; 
    
    for(let x = 0; x< N / 2; x++) {
        for(let y = x; y < N - x - 1; y++) {
            
            let temp = matrix[y][x]; 
            
            matrix[y][x] = matrix[x][N - 1 - y]; 
            
            matrix[x][N - 1 -y] = matrix[N - 1 - y][N - 1 - x];
            
            matrix[N - 1 - y][N - 1 - x] = matrix[N - 1 - x][y]; 
            
            matrix[N - 1 - x][y] = temp;
        }
    }

    matrix.reverse();
    /* for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {

        }
    } */

    return matrix;
};

// let  matrix = [[1,2,3],[4,5,6],[7,8,9]];
let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];

console.log(rotate(matrix.slice().reverse()));