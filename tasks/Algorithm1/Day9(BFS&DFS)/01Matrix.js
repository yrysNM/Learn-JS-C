/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    for(let i = 0; i< mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++){ 
            mat[i][j] = BFS(mat, i, j);
        }
    }

    return mat;
};

function BFS(matrix, y, x) {
    let currentEl; 
    let current;
    let q = [{y, x, dist: 0}];

    while(q.length) {
        current = q.shift(); 
        if(matrix[current.y] == undefined || matrix[current.y][current.x] == undefined) {
            continue;
        }

        currentEl = matrix[current.y][current.x]; 

        if(currentEl == 0) return current.dist; 

        q.push({y: current.y+1, x: current.x, dist: current.dist + 1}); 
        q.push({y: current.y, x: current.x+1, dist: current.dist+1});
        q.push({y: current.y - 1, x: current.x, dist: current.dist + 1});
        q.push({y: current.y, x: current.x -1, dist: current.dist +1});


    }
}



function BFS(matrix) {
    let queue = []; 

    if(!matrix) {
        return;
    }
    queue.push(matrix);


    

}



let mat = [[0,0,0],[0,1,0],[1,1,1]];
let mat2 = [[0,0,0],[0,1,0],[0,0,0]];
console.log(updateMatrix(mat));

console.log(updateMatrix(mat2));