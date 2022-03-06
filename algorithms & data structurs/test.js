function DirectedGraph() {
	this.edge = {}; 

}

DirectedGraph.prototype.addVertex = function(vertex) {
	this.edge[vertex] = {};
}

DirectedGraph.prototype.addEdge = function(orignVertex, destVertex, weight) {
	if(weight == undefined) {
		weight = 0;
	}

	this.edge[orignVertex][destVertex] = weight;
}


DirectedGraph.prototype.traverseBFS = function(vertex, fn) {
	let queue = [],
		visited = {}; 

		queue.push(vertex);

		while(queue.length) {
			vertex = queue.shift();
			if(!visited[vertex]) {
				visited[vertex] = true;
				fn(vertex);

				for(let adjcentVetex in this.edge[vertex]) {
					queue.push(adjcentVetex);
				}
			}
		}


}


let digrah1 = new DirectedGraph();
digrah1.addVertex("A");
digrah1.addVertex("B");
digrah1.addVertex("C");
digrah1.addVertex("D");
digrah1.addVertex("E");

digrah1.addEdge("A", "A", 1);
digrah1.addEdge("A", "C", 3);
digrah1.addEdge("A", "B", 2);
digrah1.addEdge("C", "D", 5);
digrah1.addEdge("B", "E", 4);


console.log(digrah1.edge);

digrah1.traverseBFS("A", (vertex) => {
	console.log(vertex);


});
