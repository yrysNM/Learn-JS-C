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
 * Complete the 'distance' function below.
 *
 * The function is expected to return an INTEGER.
 */

class DirectedGraph {
    constructor() {
        this.edges ={};
    }
    
    addVertex( vertex) {
        this.edges[vertex] = {};
    }
    
    addEdge(vertex1, vertex2, weight) {
        if(weight == undefined) {
            weight = 0;
            
        }
        
        this.edges[vertex1][vertex2] = weight;
    }
    
    Dijkstra(source) {
        let Q = {};
        let dist = {}; 
        
        for(let vertex in this.edges) {
            dist[vertex] = Infinity;
            Q[vertex] = this.edges[vertex];
        }
        
        dist[source] = 0;
        
        while(!_isEmpty(Q)) {
            let u = _exrtractMin(Q, dist);
            
            delete Q[u];
            
            
            for(let neighbor in this.edges[u]) {
                let alt = dist[u] + this.edges[u][neighbor];
                
                if(alt < dist[neighbor]) {
                    dist[neighbor] = alt; 
                   // console.log(alt);
                }
            }
        }
        
        return dist;
    }
}
    
function _isEmpty(obj) {
    return Object.keys(obj).length == 0;
}

function _exrtractMin(Q, dist) {
    let minimumDistance = Infinity; 
    let nodeWight = null;
    
    for(let node in Q) {
        if(dist[node] <= minimumDistance) {
             minimumDistance = dist[node]; 
             nodeWight = node;     
        }
       
    }
    
    return nodeWight;
}


function distance() {
    let g = new DirectedGraph();
    
    for(let i = 0; i< 6; i++) {
        g.addVertex(i);
    }
    
    g.addEdge('5', '0', 1);
    g.addEdge('2', '4', 1); 
    g.addEdge('3', '2', 1); 
    g.addEdge('1', '2', 1); 
    g.addEdge('0', '1', 1); 
    g.addEdge('4','3',  1); 
    g.addEdge('3', '5', 1);
    g.addEdge('0', '2', 1);
    
    console.log(g);
    console.log(g.Dijkstra("0"));
    let obj = g.Dijkstra("0");
    let arr = [];
    for(let [k,v] of Object.entries(obj)) {
        if(v != 0) {
            arr.push( `${k} = ${v}`);
        }
    }
    let res;
    for(let i = 0; i< arr.length; i++) {
        res = arr[i];
    }   
    
    //  arr.forEach(val => {
    //     return val;
    // });
    // 
    return arr.join("\n");
    
}
console.log(distance());

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    var n = parseInt(readLine());
    let numV = parseInt(readLine());
    for(let i = 0; i < +numV; i++) {
        console.log(parseInt(readLine()));
        
    }
    var strN = n.toString();//<-- Convert int n to string
    console.log(strN);
    //for(var i=1;i<=10;i++) {
       // process.stdout.write(strN+" x "+i+" = "+n*i);//<-- formatting the 
                                                     //question requires
      //  process.stdout.write("\n");//<-- newline
        
    //}

   
    const result = distance();
    
    ws.write(result + '\n');

    ws.end();
}
