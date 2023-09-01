/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let new_matrix = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length; j++) {
            if(matrix[i][j] == 0) {
                console.log(i, j);
                continue;
            }
        }
    }  
};
//not finished
let  matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix);