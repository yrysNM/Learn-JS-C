const directedGraph = require("./classDirectedGraph");

class TopologicalSort extends directedGraph {
	constructor() {
		super(); 

	}

	topologicalSortUtil(v, visited, stack) {
		visited.add(v);

		for(let item in this.edges[v]) {
			
			if(item in visited && visited[item] == false) {
				this.topologicalSortUtil(item, visited, stack);
			}
		}

		stack.unshift(v);
	}

	topologicalSort()
	{
		let visited = {}, 
			stack = []; 

		for(let item in this.edges) {
			if(item in visited && visited[item] == false) {
				this.topologicalSortUtil(item, visited, stack);
			}
		}
		return stack;
	}
}


let g = new TopologicalSort();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("B", "A");
g.addEdge("D", "C"); 
g.addEdge("D", "B");
g.addEdge("B", "A");
g.addEdge("A", "F"); 
g.addEdge("E",  "C");

let topologicalOrder = g.topologicalSort();
console.log(g);

/*  
TopologicalSort {
  edges: {
    A: { F: 0 },
    B: { A: 0 },
    C: {},
    D: { C: 0, B: 0 },
    E: { C: 0 },
    F: {}
  }
}

*/

console.log(topologicalOrder);