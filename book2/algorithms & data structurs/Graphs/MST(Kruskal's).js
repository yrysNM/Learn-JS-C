class Graph {

	constructor()  {
		this.edges = {}; 
	}

	addVertex(vertex) {
		this.edges[vertex] = {};
	}

	addEdges(vertex1, vertex2, weight) {
		if(weight == undefined) {
			weight = 0;
		}

		this.edges[vertex1][vertex2] = edges; 
		this.edges[vertex2][vertex1] = edges; 
	}

	initializeWeight(graph) {
		for(let i = 0; i < graph.length; i++){
			for(let j = 0; j < graph[0].length;j++) {
				if(graph[i][j] == 0) {
					graph[i][j] = Infinity;
				}
			}
		}
	}

	kruskal(graph) {
		let minCost = 0;				// Cost of min MST
		let V = graph.length; 

		let parent = Array(V).fill(0);

		//initialize sets  of disjoint sets. 
		for(let i = 0; i  < V; i++) {
			parent[i] = i;
		}

		// Include minimum weight edges one by one
		let edge_count = 0;
		
		//this.initializeWeight(graph);
		while(edge_count < V - 1) {  				//{1}
			let min = Infinity, a = -1 , b = -1;

			for(let i = 0; i < V; i++) {			
				for(let j = 0; j < V; j++) {
					if(graph[i][j] != 0 && find(i) != find(j) && graph[i][j] < min) {   //{2}
						min = graph[i][j];
						a = i; 
						b = j;
					}
				}
			}

			union(a, b);							//{3}
			console.log(`Edge ${edge_count++}: ${a}, ${b}  cost: ${min}`); 
			minCost += min;
		}

		console.log("minimum cost = " + minCost);


		//find set of vertex i
		function find(i) {
			while(parent[i] != i) { 
				i = parent[i];
			}

			return i;
		}

		//Does union of i and j. It returns 
		// false if i and j are already in same set
		function union(i, j) {
			let a = find(i); 
			let b= find(j); 

			parent[a] = b;
 		}
	}

}
let  g = new Graph();


const Matrix = (rows, columns) => {
	let jaggedarray = new Array(rows);

	for(let i = 0; i < columns; i++) {
		jaggedarray[i] = new Array(rows);
	}

	return jaggedarray;
};


let graph = [
	[0, 1, 0, 0, 1],
	[1, 0, 1, 0, 0],
	[0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[1, 0, 0, 0, 0]
]; 

g.kruskal(graph);			//Time complexity: O(E logV)