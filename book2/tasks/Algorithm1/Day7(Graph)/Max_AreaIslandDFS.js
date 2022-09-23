/**
 * @param {number[][]} grid
 * @return {number}
 */


var maxAreaOfIsland = function(grid) {
    //let seen = Matrix(grid.length, grid[0].length);
    let seen = Array.from(Array(grid.length), () => Array(grid[0].length));
    let dr = [1, -1, 0, 0];
    let dc= [0, 0, 1, -1];

    let ans = 0;

    for(let i  = 0; i < grid.length; i++) {
        for(let j = 0; j< grid[0].length; j++){ 
        
            if(grid[i][j] == 1 && !seen[i][j]) {
                let shape = 0; 
                let st = []; 
                st.push([i, j]);
                seen[i][j] = true; 
                while(st.length){
                    let node = st.pop(); 
                    let r = node[0], 
                        c = node[1];

                    shape++;
                    for(let k= 0; k < 4; k++){
                        let nr = r + dr[k]; 
                        let nc = c+ dc[k];

                        if(0 <= nr && nr< grid.length && 
                            0 <= nc && nc < grid[0].length && 
                            grid[nr][nc] == 1 &&  !seen[nr][nc]) {
                            st.push([nr, nc]);
                            seen[nr][nc] = true;
                        }
                    }
                }
                ans = Math.max(ans, shape);
            }
        }
    }
    return ans;
};

function Matrix(rows, columns) {
    let arr = new Array(rows); 

    for(let i = 0; i < columns; i++) {
        arr[i] = new Array(rows); 

    }

    return arr;
}

//tests
//let  grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
//let grid = [[0], [1]]
let grid = [    
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]]
console.log(maxAreaOfIsland(grid));
