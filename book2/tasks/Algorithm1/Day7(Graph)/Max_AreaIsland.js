/**
 * @param {number[][]} grid
 * @return {number}
 */

let seen;

var maxAreaOfIsland = function(grid) {
    seen = Matrix(grid.length, grid[0].length); 
    let ans= 0; 

    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            ans = Math.max(ans, area(r, c));
        }
    }   

    return ans;
};


function Matrix(rows, columns) {
    let jaggedArray = new Array(rows);
    for(let i =0; i < columns; i++) {
        jaggedArray[i] = new Array(rows);
    }

    return jaggedArray;
}


function area(r, c) {
    if(r < 0 || r >= grid.length || c< 0 || c>= grid[0].length || 
            seen[r][c] || grid[r][c] == 0) {
        return 0;
    }

    seen[r][c] = true; 
    return(1 + area(r + 1, c) + area(r - 1, c) + area(r, c - 1) + area(r, c + 1));
}


var  grid = [
        [0,0,1,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,1,1,0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,1,1,0,0,1,0,1,0,0],
        [0,1,0,0,1,1,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0]
    ];

console.log(maxAreaOfIsland(grid));