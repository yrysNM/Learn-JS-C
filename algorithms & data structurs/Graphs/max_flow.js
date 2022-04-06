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
	}

	convert() {
		let graph, V = [],
			count = 0; 

		for(let vertex in this.edges) {
			V.push(vertex);
			count++;
		}

		graph = Matrix(count, count);

		for(let i = 0; i< graph.length; i++) {
			for(let j = 0; j < graph[0].length; j++) {
				if(graph[i][j] != null) {
					graph[i][j] = 0;
				}
			}
		}

		return graph;

	}

	
}


function Matrix(row, columns) {
	let jaggedArray = new Array(row);

	for(let i = 0; i < columns; i++) {
		jaggedArray[i] = new Array(row);
	}

	return jaggedArray;
}