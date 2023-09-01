class Graph{
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
		let graph, key;
		for(let[k,  v] of Object.entries(this.edges)) {
			
			let arrV = Object.entries(v);
			key = +k;

		}


		graph = Matrix(key, key);
		let V;
		for(let vertex  in this.edges) {
			V = vertex;
		}

		for(let i = 1; i <= V; i++) {
			for (let j = 1; j <= V; j++) {
				graph[i - 1][j - 1] = this.edges[i][j];
			}
		}

		for(let i = 0; i< graph.length; i++) {
			for(let j = 0;j < graph[0].length; j++) {
				if(graph[i][j] == null)
					graph[i][j] = 0;
			}
		}
		// console.log(res);
		
		return graph; 
	}

	minKey(key, mstSet) {
		let min = Infinity,
			min_index;

		let V; 
		for(let vertex in this.edges) {
			V = vertex;
		}

		for(let v= 0; v < V; v++) {
			if(mstSet[v] == false && key[v] < min) {
				min = key[v];
				min_index = v;
			}
		}

		return min_index;
	}

	getVertex() {
		let V;
		for(let vertex in  this.edges) {
			V = vertex;
		}

		return V;
	}

	printMST(parent, graph) {
		console.log("Edge \tWeight");
		for(let i = 1; i < this.getVertex(); i++) {
			console.log(parent[i] + " - " + i + "\t" + graph[i][parent[i]]);
		}
	}

	primMST(graph) {
		let V;
		
		for(let vertex in this.edges) {
			V = vertex;
		}

		let parent = new Array(V);

		let key = new Array(V);

		let mstSet = new Array(V);

		for(let i = 0; i < V; i++) {
			key[i] = Infinity;
			mstSet[i] = false; 
		}

		key[0] = 0;
		parent[0] = -1;

		for(let count = 0; count < V - 1; count++) {
			let u= this.minKey(key, mstSet);
		//	console.log(u);
			mstSet[u] = true;

			
			for(let v = 0; v < V; v++) {
				if(graph[u][v] != 0 && mstSet[v] == false && graph[u][v] < key[v]) {
					parent[v] = u; 
					key[v] = graph[u][v];
				}
			}
		}

		this.printMST(parent, graph);
	}


}

function Matrix(rows, columns) {
	let jaggedarray = new Array(rows);

	for(let i = 0; i < columns; i++) {
		jaggedarray[i] = new Array(rows);
	}

	return jaggedarray;
}

function roadsAndLibraries(n, c_lib, c_road, cities) {
    // Write your code here
   let g = new Graph();
   for(let i = 1; i <= n; i++) {
   		g.addVertex(i);
   }

   for(let i= 0; i < cities.length; i++) {
   		for(let j = 0;j< cities[0].length; j++) {
   			if(cities[i][j + 1])
   				g.addEdge(cities[i][j], cities[i][j + 1], c_road);
   		}
   }

   let graph = g.convert();
   console.log(graph);
   g.primMST(graph);
}

let  cities = [[1, 3], [3, 4], [2, 4]];
roadsAndLibraries(4, 2 , 5, cities);