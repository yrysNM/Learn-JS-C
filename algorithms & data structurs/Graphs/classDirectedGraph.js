class DirectedGraph {
	constructor() {
		this.edges = {};
	}

	addVertex(vertex) {
		this.edges[vertex] = {};
	}

	addEdge(origVertex, destVertex, weight) {
		if(weight == undefined) {
			weight = 0;
		}

		this.edges[origVertex][destVertex] = weight;
	}

	removeEdge(origVertex, destVertex) {
		if(this.edges[origVertex] && this.edges[origVertex][destVertex] != undefined) {
			delete this.edges[origVertex][destVertex];
		}
	}

	removeVertex(vertex) {
		for(let adjacentVertex in this.edges[vertex]) {
			this.removeEdge(adjacentVertex, vertex);
		}

		delete this.edges[vertex];
	}
}


module.exports = DirectedGraph;