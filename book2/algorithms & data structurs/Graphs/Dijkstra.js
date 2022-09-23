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


	Dijkstra(source) {
		//create vertex set Q
		let Q = {}, 
			dist = {}; 

		for(let vertex in this.edges) {
			//unknown distance set to Infinity
			dist[vertex] = Infinity; 
			// add V to Q
			Q[vertex] = this.edges[vertex];
		}

		// Distance from source to source init to 0
		dist[source] = 0;


		while(!_isEmpty(Q)) {
			let u = _extractMin(Q, dist); 		// get the min distance

			//remove u from Q
			delete Q[u];

			//for each neighbor v, of u: 
			// where v is still in  Q.

			for(let neighbor in this.edges[u]) {
				// current distance
				let alt = dist[u] + this.edges[u][neighbor];

				// a shorter path has been found

				if(alt < dist[neighbor]) {
					dist[neighbor] = alt;
					console.log(dist);
				}
			}
		}

		return dist;		//Time Complexity: O(V^2+ E)
	}
}


function _isEmpty(obj) {
	return Object.keys(obj).length === 0;
}


function _extractMin(Q, dist) {
	let  minimumDistance = Infinity; 
	let nodeWithMinimumDistance = null;

	for(let node in Q) {
		if(dist[node] <= minimumDistance) {
			minimumDistance = dist[node];

			nodeWithMinimumDistance = node;
		}
	}

	return nodeWithMinimumDistance;
}

let digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addVertex("D");

digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 1);
digraph1.addEdge("C", "A", 1);
digraph1.addEdge("A", "D", 1);

console.log(digraph1);					// => 
/*  
DirectedGraph {
  edges: { A: { B: 1, D: 1 }, B: { C: 1 }, C: { A: 1 }, D: {} }
}
*/

console.log(digraph1.Dijkstra("A"));	// => 

/* { A: 0, B: 1, C: 2, D: 1 } */