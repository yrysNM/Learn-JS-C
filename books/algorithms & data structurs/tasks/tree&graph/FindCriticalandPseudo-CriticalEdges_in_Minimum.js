class Graph {
    constructor(){
    	this.edges ={};
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
    	let graph, countV = 0;
    	let V = [];
    	for(let vertex in this.edges) {
    		V.push(vertex);
    		countV++;
    	}

    	graph = Matrix(countV, countV);

    	for(let i = 0; i < countV; i++) {
    		for(let j = 0; j < countV; j++){
    			graph[i][j] = this.edges[V[i]][V[j]];
    		}
    	}


    	for(let i = 0; i < graph.length; i++){
    		for(let j = 0; j < graph[0].length; j++) {
    			if(graph[i][j] == null) {
    				graph[i][j] = 0;
    			}
    		}
    	}

    	return graph;
    }


    minKey(key, mstSet, graph) {
    	let V = graph.length,
    		min = Infinity,
    		min_index = -1; 

    	for(let v = 0; v < V; v++){
    		if(mstSet[v] == false && key[v] < min) {
    			min = key[v];
    			min_index = v;
    		}
    	}

    	return min_index;
    }


    primMST(graph){
    	let V = graph.length;

    	let parent = new Array(V);
    	let mstSet = new Array(V);
    	let key = new Array(V);

    	for(let i = 0; i< V; i++ ) {
    		key[i] = Infinity;
    		mstSet[i] = false;
    	}


    	key[0] = 0; 
    	parent[0] = -1;

    	for(let count = 0; count < V - 1; count++) {
    		let u = this.minKey(key, mstSet, graph); 

    		mstSet[u] = true; 

    		for(let v = 0; v < V; v++) {
    			if(graph[u][v] != 0 && mstSet[v] == false &&
    				graph[u][v] < key[v]) {
    				key[v] = graph[u][v];
    				parent[v] = u;
    			}
    		}
    	}

    	return this.printMst(graph, parent);
    }

    printMst(graph, parent) {
    	let sumCost = 0;
    	let pseudo_critical = [];

    	console.log("Edge \tWeight");
    	for(let i = 1;i < graph.length; i++) {
    		sumCost += graph[i][parent[i]];
    		
    		console.log(`${i} - ${parent[i]}   ${graph[i][parent[i]]}`);
    	}
    	
    	return sumCost;
    }


    kruskal(graph) {
    	let minCost = 0;
    	let V = graph.length; 

    	let parent = Array(V).fill(0);
    	for(let i = 0; i < V; i++){
    		parent[i] = i;
    	}

    	let edge_count = 0; 

    	while(edge_count < V - 1) {
    		let min = Infinity, a = -1, b= -1; 

    		for(let i = 0; i< V; i++){
    			for(let j = 0; j < V; j++) {
    				if(graph[i][j] != 0 && find(i) !=find(j) && graph[i][j] < min) {
    					min = graph[i][j]; 
    					a = i; 
    					b = j; 
    				}
    			}
    		}
    		union(a,  b);
    		console.log(`Edge ${edge_count++}: ${a}, ${b}  cost: ${min}`);
    		minCost += min;
    	}

    	console.log("minumim: " , minCost);

    	function find(i) {
    		while(parent[i] != i) {
    			i = parent[i];
    		}

    		return i;
    	}

    	function union(i, j) {
    		let a = find(i); 
    		let b = find(j);

    		parent[a] = b;
    	}
    }


}


function Matrix(rows, columns) {
	let jaggedarray = new Array(rows);
	for(let i = 0; i < columns; i++) {
		jaggedarray[i] = new Array(rows);
	}

	return jaggedarray;
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
	let g = new Graph();
    
    for(let i = 0; i < n; i++) {
    	g.addVertex(i);
    }

    for(let i = 0; i < edges.length; i++){
    	g.addEdge(edges[i][0], edges[i][1], edges[i][2]);
    }

    let graph = g.convert(); 
    console.log(g);
    console.log(graph);
    console.log(g.primMST(graph));
    g.kruskal(graph);
};


 let n = 5; 
 let edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]];

// let n =4; 
// let edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]];


findCriticalAndPseudoCriticalEdges(n, edges);
