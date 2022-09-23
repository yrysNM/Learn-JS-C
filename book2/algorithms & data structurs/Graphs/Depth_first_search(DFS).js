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
		let visited = {};
		//Time Complexity: O(V + E
		this._traverseDFS(vertex, visited, fn);
	}

	_traverseDFS(vertex, visited, fn) {
		visited[vertex] = true; 
		fn(vertex);

		for(let adjacentVertex in this.edges[vertex]) {
			if(!visited[adjacentVertex]) {
				this._traverseDFS(adjacentVertex, visited, fn);
			}
		}
	}
 }

let digraph2 = new DirectedGraph(); 

for(let i = 1; i <= 5; i++) {
	digraph2.addVertex(i);
}

digraph2.addEdge(1, 2);
digraph2.addEdge(1, 5);
digraph2.addEdge(2, 3);
digraph2.addEdge(3, 4);
digraph2.addEdge(4, 5);

digraph2.traverseDFS(2, (vertex) => {
	console.log(vertex);
});


