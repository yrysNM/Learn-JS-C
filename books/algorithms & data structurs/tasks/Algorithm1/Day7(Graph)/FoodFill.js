
class Graph{
    constructor(){
        this.edges = {};
        this.adj;
    }

    addVertex(vertex) {
        this.edges[vertex] = {};
    }

    addEdge(vertex1, vertex2, weight) {
        if(weight == undefined) {
            weight = 0;
        }

        this.edges[vertex1][vertex2] = weight;
        this.edges[vertex2][vertex1] = weight;
    }

    traverseBFS(vertex, fn) {
        let queue = []; 
        let visited = {}; 

        queue.push(vertex);

        while(queue.length) {
            vertex = queue.shift(); 

            if(!visited[vertex]) {
                visited[vertex] = true;
                fn(vertex);

                for(let v in this.edges[vertex]) {
                    
                        queue.push(v);
                }
            }
        }
    }

    traverseDFS(vertex, fn) {
            let visisted = {}; 

            this._traverseDFS(vertex, visisted, fn);
    }

    _traverseDFS(vertex , visited, fn) {
         visited[vertex] = true; 

         fn(vertex);

         for(let v in this.edges[vertex]) {
            if(!visited[v]) {
                this._traverseDFS(v, visited, fn);
            }
         }
    }
}



function dfs(img,  r, c, color, new_color) {
    if(image[r][c] == color) {
        image[r][c] = new_color; 
        if(r >= 1) dfs(image, r - 1, c, color,  new_color);
        if(c >= 1) dfs(image, r, c - 1, color, new_color);
        if(r + 1 < image.length) dfs(image, r + 1, c, color, new_color);
        if(c + 1 < image[0].length) dfs(image, r,  c + 1, color, new_color);
    }
}

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var floodFill = function(image, sr, sc, newColor) {
    let color=  image[sr][sc];
    if(color != newColor) 
        dfs(image, sr, sc, color, newColor);

    return image;

    /* let g = new Graph;
    let new_obj= {};
    let res;
    for(let i = 0; i < image.length; i++) {
        g.addVertex(i);
    }

    let count = 0;
    let check = image[sr][sc];
    for(let i = 0; i < image.length; i++) {
        for(let j =  0; j < image[0].length; j++) {

            if(image[i][j] == check) {

                g.addEdge(i, j, image[i][j]);

            }else {
                
                 g.addEdge(i, j, 0);
            }

        }

    }



    let queue  = image; 
    let visited = {};
    for(let i = 0;  i < image.length; i++) {
        for(let j = 0; j < image.length; j++) {
            
            if(image[sr][sc] == g.edges[i][j]) {
            let v= g.edges[sr][sc];
                // console.log(v);
               

                g.traverseDFS(v, (vertex) => {
                    console.log(vertex);
                    //if(g.edges[i][j] != 0) {
                       console.log(g.edges[vertex], vertex); 
                    //}
                });
            }
        }
    }


    /* g.traverseBFS('1', (vertex) => {
        console.log(vertex);
    });
    console.log(g); */
   //return g; */
};


let image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2

console.log(floodFill(image, sr, sc, newColor));