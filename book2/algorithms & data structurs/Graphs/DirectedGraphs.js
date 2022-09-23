function DirectedGraph() {
	this.edges = {};
}

DirectedGraph.prototype.addVertex = function(vertex) {
	this.edges[vertex] = {};
}


DirectedGraph.prototype.addEdge = function(origVertex, destVertex, weight) {
	if(weight == undefined) {
		weight = 0;
	}

	this.edges[origVertex][destVertex] = weight;
}

let digraph1= new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex('B');
digraph1.addVertex("C");

digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 2);
digraph1.addEdge("C", "A", 3);

//console.log(digraph1);			// => DirectedGraph { edges: { A: { B: 1 }, B: { C: 2 }, C: { A: 3 } } }

/* removeEdge removeVertex */
DirectedGraph.prototype.removeEdge = function(origVertex, destVertex) {
	if(this.edges[origVertex] && this.edges[origVertex][destVertex] != undefined) {
		delete this.edges[origVertex][destVertex];
	}
}

DirectedGraph.prototype.removeVertex = function(vertex) {
	for(let adjencentVertex in this.edges[vertex]) {
		this.removeEdge(adjencentVertex, vertex);
	}

	delete this.edges[vertex];
}

digraph1.removeVertex("A");
console.log(digraph1);				// => DirectedGraph { edges: { B: { C: 2 }, C: { A: 3 } } }