class DirectedGraph {
	constructor() {
		this.edges = {};
	}

	addVertex(vertex) {
		this.edges[vertex] = {};
	}

	addEdge(origVertex, destVertex, weight) {
		if(weight  == undefined) {
			weight = 0;
		}

		this.edges[origVertex][destVertex] = weight;
	}

	traverseBFS(vertex, fn) {
		let queue = []; 
		let visited ={};

		queue.push(vertex);

		while(queue.length) {
			vertex = queue.shift();
			if(!visited[vertex]) {
				visited[vertex] = true;
				fn(vertex);

				for(let adjent in this.edges[vertex]) {
				

					queue.push(adjent);
					//vertex = adjent;

				}
			}

		}
	}
}


let digraph1= new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex('B');
digraph1.addVertex("C");

digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 2);
digraph1.addEdge("C", "A", 3);


console.log(digraph1);

digraph1.traverseBFS("B", (vertex) => {
		console.log(vertex);
});