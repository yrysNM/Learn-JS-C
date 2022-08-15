'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'shortestReach' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY edges
 *  3. INTEGER s
 */

class Graph {
    constructor() {
        this.edges = {};
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
    
    convert() {
        let graph, V = [], count = 0;

        for(let vertex in this.edges) {
            V.push(vertex);
            count++;
        }

        graph = Matrix(count, count);

        for(let i = 0; i < count;i++) {
            for(let j = 0; j < count;j++) {
                graph[i][j] = this.edges[V[i]][V[j]];
            }
        }

        for(let i =0; i < graph.length; i++) {
            for(let j = 0; j < graph[0].length; j++) {
                if(graph[i][j] == null) {
                    graph[i][j] = 0;
                }
            }
        }

        return graph;
    }

    DijkstraWithMatrix(graph, source) {
        let V = graph.length;
        let dist = new Array(V);

        let sptSet = new Array(V);


        for(let i =0; i < V; i++) {
            dist[i] = Number.MAX_VALUE;
            sptSet[i] = false;
        }

        dist[source] = 0;

        for(let count = 0; count < V - 1; count++) {
            let u = minDistance(dist, sptSet, graph);

            sptSet[u] = true;

            for(let v =0;v < V; v++) {
                if(sptSet[v] == false && graph[u][v] != 0 && 
                    dist[u] != Number.MAX_VALUE) {

                    let alt = dist[u] + graph[u][v];

                    if(alt < dist[v])
                        dist[v] = alt;
                
                }
            }
        }

        return this.printSolve(dist, source);
    }

    printSolve(dist, source) {
        let first = dist[source - 1];

        let res = [];
      //  res.push(first);

        for(let i = 0; i < dist.length; i++) {
            
            res.push(Math.abs(first - dist[i]));
        
        }
        
        res.forEach((item, i) => {
            if(item == Number.MAX_VALUE) {
                res[i] = -1;
            }
        }); 
        return res;
    }



    Dijkstra(source) {
        let Q = {},
            dist = {}; 
        
        for(let vertex in this.edges) {
            dist[vertex] = Infinity;
            Q[vertex] = this.edges[vertex];
        }
        
        dist[source] = 0; 
        
        while(!_isEmpty(Q)) {
            let u = _extractMin(Q, dist);
            
            delete Q[u];
            
            for(let neighbor in this.edges[u]) {
                let alt = dist[u] + this.edges[u][neighbor];
                
                if(alt < dist[neighbor]) {
                    dist[neighbor] = alt; 
                   // console.log(dist);
                }
            }
        }
        
        return dist;
    }
}


function minDistance(dist, sptSet, graph) {
    let min = Number.MAX_VALUE;
    let min_index = -1;
    let V = graph.length;

    for(let v = 0; v< V; v++) {
        if(sptSet[v] == false && dist[v] <= min) {
            min= dist[v];
            min_index= v;
        }
    }

    return min_index;
}

function Matrix(row, columns) {
    let  jaggedarray = new Array(row);

    for(let i = 0; i< columns; i++) {
        jaggedarray[i] = new Array(row);
    }

    return jaggedarray;
}

function _isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function _extractMin(Q, dist) {
    let minDis = Infinity;
    let nodeMinDis= -1;
    
    for(let node  in Q) {
        if(dist[node] <= minDis) {
            minDis = dist[node];
            
            nodeMinDis = node;
        }
    } 
    
    return nodeMinDis;
}


function shortestReach(n, edges, s) {
    // Write your code here
    let g = new Graph();
   // console.log(n,edges, s);
    for(let i = 1; i <= n; i++) {
        g.addVertex(i);
    }
    
    for(let i = 0; i < edges.length; i++) {
        g.addEdge(edges[i][0], edges[i][1], edges[i][2]);
    }
    
     let graph = g.convert();
     console.log(graph);
     let objRes = g.DijkstraWithMatrix(graph, s);

     console.log(objRes);


    /* let res = [];
    let objDijkstra = g.Dijkstra(s);
//    let values = Object.values(objDijkstra);
    
    for(let[k, v] of Object.entries(objDijkstra)) {
        if(v != 0) {
            res.push(v);
        }
    }

    res.forEach((item, i) => {
        if(item == Infinity) {
            res[i] = -1;
        } 
    }); */
   // console.log(res);
   // return  res; 
}

/* let n = 6; 
let edges = [
    [1, 2, 10],
    [1, 3, 6],
    [2, 4, 8]
    //[4, 3, 12]
];

let s= 2; */

shortestReach(n, edges, s);


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        let edges = Array(m);

        for (let i = 0; i < m; i++) {
            edges[i] = readLine().replace(/\s+$/g, '').split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s = parseInt(readLine().trim(), 10);

        const result = shortestReach(n, edges, s);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
