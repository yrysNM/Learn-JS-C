class DirectedGraph {
	constructor(){
		this.edges = {}; 

	}

	addVertex(vertex){
		this.edges[vertex] = {};
	}

	addEdge(origVertex, destVertex, weight){
		if(weight == undefined) {
			weight = 0;
		}

		this.edges[origVertex][destVertex] = weight;
	}

	traverseDFS(vertex, fn) {
			let visisted = {}; 

			this._traverseDFS(vertex, visisted, fn);
	}

	_traverseDFS(vertex , visited, fn) {
		 visited[vertex] = true; 

		 fn(vertex);

		 for(let v in this.edges[vertex]) {
		 	if(!visited[v]) {
		 		this._traverseDFS(v, visited, fn);
		 	}
		 }
	}
 }

 let g = new DirectedGraph();

 g.addVertex("A");
 g.addVertex("B");
 g.addVertex("C");
 g.addVertex("E");
 g.addVertex("F");
  g.addVertex("I");
  g.addVertex("J");
  g.addVertex("D");
  g.addVertex("G");
  g.addVertex("H");
  g.addVertex("K");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "E");
g.addEdge("B", "F");
g.addEdge("F", "I");
g.addEdge("F", "J");
g.addEdge("D", "G");
g.addEdge("D", "H");
g.addEdge("G", "K");

g.traverseDFS("A",(vertex) =>  {
		console.log(vertex);
});
