class Graph {
	constructor() {
		this.edges = {};
	}

	addVertex(vertex) {
		this.edges[vertex] = {};
	}

	addEdge(vertex1, vertex2, weight) {
		this.edges[vertex1][vertex2] = weight;
	}


	convert() {
		let graph, V = [], count = 0;

		for(let vertex in this.edges) {
			V.push(vertex);
			count++;
		}
	
		graph = Array.from(Array(count), () => new Array(count));

		for(let i =0;  i < count; i++) {
			for(let j = 0; j < count; j++) {
				graph[i][j] = this.edges[V[i]][V[j]];
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
	// Returns true if there is a path from source
	// 's' to sink 't' in residual graph. Also
	// fills parent[] to store the path
	BFS(rGraph, s, t, parent, graph) {
		let V = graph.length;
		let visited = new Array(V);

		for(let i = 0; i < V;  i++) {
			visited[i] = false;
		}

		let queue = [];
		queue.push(s);
		visited[s] = true;

		parent[s] = -1;

		while(queue.length) {
			let u = queue.shift();

			for(let v = 0; v < V;v++) {
				if(visited[v] == false && rGraph[u][v] > 0) {
					if(v == t) {
						parent[v] = u;
						return true;
					}

					queue.push(v);
					parent[v] = u;
					visited[v] = true;
				}
			}
		}
		return false;
	}

	fordFulkerson(graph, s,t) {
		let u, v;
		let V = graph.length;

		let rGraph = new Array(V);

		for(u = 0;  u < V; u++) {
			rGraph[u] = new Array(V);

			for(v =0; v<  V; v++) {
				rGraph[u][v] = graph[u][v];
			}
		}

		let parent = new Array(V);				// This array is filled by BFS and to store path
		let max_flow = 0;

		while(this.BFS(rGraph, s,t, parent, graph)) {
			let path_flow = Infinity; 

			for(v = t; v != s; v = parent[v]) {
				u = parent[v];

				path_flow = Math.min(path_flow, rGraph[u][v]);
			}

			
			// Update residual capacities of the edges and
        	// reverse edges along the path
			for(v = t; v != s; v = parent[v]) {
				u = parent[v]; 
				//console.log(rGraph);
				rGraph[u][v] -= path_flow;
				
				rGraph[v][u] += path_flow;
				
			}

			max_flow += path_flow;
		}

		return max_flow;					//O(max_flow * E).
	}
}

let g= new Graph();

for(let i = 0; i < 6; i++) {
	g.addVertex(i);
}

g.addEdge(0, 1, 16);
g.addEdge(0, 2, 13);
g.addEdge(1, 2, 4);
g.addEdge(2, 1, 10);
g.addEdge(1, 3, 12);
g.addEdge(2, 4, 14);
g.addEdge(4, 3, 7);
g.addEdge(3, 2, 9);
g.addEdge(4, 5, 4);
g.addEdge(3, 5, 20);

let graph = g.convert();


console.log(g.fordFulkerson(graph, 0, 5));		// 23
