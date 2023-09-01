/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
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



var findTheCity = function(n, edges, distanceThreshold) {
    let g = new Graph();
    
    for(let i = 0; i < n; i++) {
        g.addVertex(i);
    }
    
    for(let i = 0; i < edges.length; i++) {
        g.addEdge(edges[i][0], edges[i][1], edges[i][2]);
    }
    // let obj = [];
    // for(let i = 0; i <= n; i++) {
    //     obj.push(g.Dijkstra(i));
    //     
    // }
    
  //  console.log(obj);
    let res = [];
    for (let start = 0; start < n; start++) {
        let dis = g.Dijkstra(start), canReach = new Set();
        for (let dest = 0; dest < n; dest++) {
            if (start == dest) continue; // ignore to itself
            if (dis[dest] <= distanceThreshold) canReach.add(dest); // valid destination
        }
        res.push([start, canReach.size]);
    }


    res.sort((x, y) => {
        if (x[1] != y[1]) return x[1] - y[1]; // smaller number of cities can reach
        return y[0] - x[0] // same, greatest number comes first
    });

    console.log(res);
    //res = Array.from(checkSet);
    //return Math.max(...res);
    // for(let[k, v] of Object.entries(obj)) {
    //     if(v <= distanceThreshold) {
    //       res.push(k);
    //     }
    // }
    // let testArr = [];
    // for(let i = 0; i <  res.length; i++) {
    //    if(obj[res[i]] != 0 && obj[res[i]] != Infinity) {
    //         testArr.push(obj[res[i]]);
    //        
    //    }
    // }
    // 
    // if(testArr.length == 0) {
    //     return 0;
    // }
    //  console.log(res, testArr);
    // ans = Math.min(...testArr);
    // return ans;
};


let n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4;
console.log(findTheCity(n , edges, distanceThreshold));