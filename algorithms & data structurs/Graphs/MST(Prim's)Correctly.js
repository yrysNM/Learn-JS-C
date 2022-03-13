class Graph {
	constructor() {
	 	this.edges = {};
	 }

	addVertex(vertex) {
		this.edges[vertex] = {};
	}

	addEdge(vertex1,vertex2, weight) {
		if(weight == undefined) {
			weight = 0;
		}

		this.edges[vertex1][vertex2] = weight;
		this.edges[vertex2][vertex1] = weight;
	}

	convert() {
		let graph, key;

		let V = [], count = 0; 
		for(let vertex in this.edges) {
			V.push(vertex); 
			count++;
		}
		graph = Matrix(count, count);

		for(let i = 1; i <=  count; i++) {
			for(let j = 1; j <= count; j++) {
				graph[i - 1][j - 1]= this.edges[V[i - 1]][V[j - 1]];

			}
		}

		for(let i = 0; i< graph.length; i++) {
			for(let j = 0; j < graph[0].length; j++) {
				if(graph[i][j] == null) {
					graph[i][j] = 0;
				}
			}
		}

		return graph;
	}

	// A utility function to find the vertex with minimum key
    // value, from the set of vertices not yet included in MST
	minKey(key, mstSet, graph) {
		 // Initialize min value
		let min = Infinity,
			min_index = -1;
		let countV = 0; 
		
		countV = graph.length;
	

		for(let v = 0; v < countV; v++) {
			if(mstSet[v] == false && key[v] < min) {
				min = key[v]; 
				min_index = v;
			}
		}
		return min_index;
	}

	// A utility function to print the
	// constructed MST stored in parent[]
	printMst(graph, parent) {
		let sumCost = 0; 
		console.log("Edge \tWeight");
		for(let i = 1; i < graph.length; i++) {
			console.log(`${parent[i]} - ${i} \t${graph[i][parent[i]]}`);
			sumCost += graph[i][parent[i]];
		}

		console.log("Minimum weight: " + sumCost);
	}

	// Function to construct and print MST for
	// a graph represented using adjacency
	// matrix representation
	primMST(graph) {
		let V = graph.length; 

		// Array to store constructed MST
		let parent = new Array(V);

		// Key values used to pick minimum weight edge in cut
		let key = new Array(V);

		// To represent set of vertices included in MST
		let mstSet = new Array(V);

		// Initialize all keys as INFINITE
		for(let i= 0; i< V; i++ ) {
			key[i] = Infinity; 
			mstSet[i] = false; 
		}

		// Always include first 1st vertex in MST.
    	// Make key 0 so that this vertex is picked as first vertex.
		key[0] = 0; 
		parent[0] = -1;

		//  The MST will have V vertices
		for(let count = 0; count < V - 1; count++) {

			// Pick the minimum key vertex from the
        	// set of vertices not yet included in MST
			let u = this.minKey(key, mstSet, graph);

			// Add the picked vertex to the MST Set minimum
			mstSet[u] = true ;

			// Update key value and parent index of
	        // the adjacent vertices of the picked vertex.
	        // Consider only those vertices which are not
	        // yet included in MST
			for(let v = 0; v < V; v++) {

				 // graph[u][v] is non zero only for adjacent vertices of m
	            // mstSet[v] is false for vertices not yet included in MST
	            // Update the key only if graph[u][v] is smaller than key[v]
				//console.log(graph[u][v] , key[v]);
				if(graph[u][v] != 0 && mstSet[v] == false && 
					graph[u][v] < key[v]) {
					parent[v] = u; 
					key[v] = graph[u][v];

				}
			}
		}
				//	console.log(parent, key);
		//print MST
		return this.printMst(graph, parent);
	}
}


function Matrix(rows, columns) {
	let jaggedarray = new Array(rows);

	for(let  i = 0; i < columns; i++) {
		jaggedarray[i] = new Array(rows);
	}

	return jaggedarray;
}

let g = new Graph();

//test1
/* for(let i = 1; i <= 5; i++) {
	g.addVertex(i);
}

g.addEdge("1", "2", 2);
g.addEdge("1", "4", 6);
g.addEdge("2", "3", 3);
g.addEdge("2", "4", 8);
g.addEdge("2", "5", 5); 
g.addEdge("3", "5", 7);
g.addEdge("4", "1", 6);
g.addEdge("4", "5", 9); */

/* test2 */
/* g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D"); 
g.addVertex("E");

g.addEdge("A", "B", 2); 
g.addEdge("A", "E", 3); 
g.addEdge("B",  "C", 3); 
g.addEdge("B", "D", 4);
g.addEdge("E", "D", 5); 
g.addEdge("D", "C", 4); 


let graph = g.convert(); 
console.log(graph);
  */


//test3
let graph = [[0, 2, 4, 0, 0, 0],
[2, 0, 2, 4, 2, 0],
[4, 2, 0, 0, 3, 0],
[0, 4, 0, 0, 3, 2],
[0, 2, 3, 3, 0, 2],
[0, 0, 0, 2, 2, 0]];

g.primMST(graph);			//Time complexity: O(V^2)