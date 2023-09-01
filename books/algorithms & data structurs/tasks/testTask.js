//road
/* function sumRoad(n, matrix) {
	let sum = 0, countV = 0;

	for(let i = 0; i < matrix.length; i++) {
		for(let j = 0; j < matrix[0].length; j++) {
			if(matrix[i][j] == 1) {
				countV++;
			}
		}
	}

	sum = countV / 2;
	return sum;
}

//test
let n = 5; 
let matrix = [
	[0, 1, 0, 0, 0],
	[1, 0, 1, 1, 0],
	[0, 1, 0, 0, 0],
	[0, 1, 0, 0, 0],
	[ 0, 0, 0, 0, 0]
];

console.log(sumRoad(n, matrix));		// => */  //3


//path
class Graph {
	constructor() {
		this.edges  = {}; 
	}

	addVertex(vertex) {
		this.edges[vertex] = {};
	}

	addEdge(vertex1, vertex2, weight) {
		if(weight == undefined) {
			weight =0;
		}

		this.edges[vertex1][vertex2] = weight; 
		this.edges[vertex2][vertex1] = weight;
	}



	convert() {
		let graph, countV = 0; 
		let V = [];
		for(let vertex in this.edge) {
			 V.push(vertex);
			 countV++;
		} 

		graph = Matrix(countV, countV); 

		for(let i = 0; i < countV; i++) {
			for(let j = 0; j < countV; j++) {

			}
		}

		for(let i = 0; i < graph.length; i++) {
			for(let j = 0; j< graph[0].length; j++) {
				if(graph[i][j] == null) {
					graph[i][j] = 0;
				} 
			}
		}

		return graph;
	}


	kruskal(graph) {
		let minCost = 0; 
		let V = graph.length; 
		let minCosts = []; 
		let cost  = 0;

		let parent = Array(V).fill(0); 

		for(let i =0; i < V; i++) {
			parent[i] = i;
		}

		let edge_count = 0;

		while(edge_count < V - 1) {
			let min = Infinity, a = -1, b = -1;

			for(let i = 0; i < V; i++) {
				for(let j = 0; j < V; j++) {
					if(graph[i][j] != 0 && find(i) != find(j) && graph[i][j] < min) {
						min = graph[i][j];
						a = i; 
						b = j;
					}
				}
			}

			union(a, b); 
			edge_count++;
			minCosts.push(min);
			cost = this.printMST(min, minCosts);
			minCost += min;
		}

		//console.log(minCost);
		
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

		return cost;
	}

	printMST(min, minCosts) {
	

		/* if(min != Infinity) */
		if(!minCosts) {
			return -1;
		}

		let sumCost = 0; 
		/* for(let i = 0; i < graph.length - 1;i++) {
			minCosts[i] = min;
		} */

		for(let i =0; i < minCosts.length; i++) {
			if(minCosts[i] != Infinity) {
				sumCost += minCosts[i];
			}
		}

		return sumCost;
	}

}

function Matrix(rows, columns) {
	let jaggedarray =  new Array(rows); 

	for(let i =  0; i< columns; i++) {
		jaggedarray[i] = new Array(rows);
	}

	return jaggedarray; 
}


let g = new Graph();

// let graph = [
// 	[0, 1, 0, 0, 1],
// 	[1, 0, 1, 0, 0],
// 	[0, 1, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[1, 0, 0, 0, 0]
// ]; 

let graph  = [
	[0, 0], 
	[0, 1]	
];

console.log(g.kruskal(graph));

