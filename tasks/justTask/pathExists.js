class UndirectedGraph {
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

	traverseBFS(vertex, dis) {
		let queue = [], 
			visited = {};

		queue.push(vertex);

		while(queue.length){
			let temp = queue.shift();

			if(!visited[vertex]) {
				visited[vertex] = true; 
				//console.log(temp);

				for(let adjacentVertex in this.edges[vertex]) {
					queue.push(adjacentVertex);

					if(adjacentVertex == dis) {
						return true;
					}
				}
			}
		}
	}

	Dijkstra(source) {
		let Q = {},
			dist = {};

		for(let vertex in this.edges) {
			dist[vertex] = Infinity;

			Q[vertex] = this.edges[vertex];
		}

		dist[source] = 0;

		while(!_isEmpty(Q)) {
			let u = _extractMin(Q, dist);

			delete Q[u];

			for(let neighbor in this.edges[u]) {
				let alt = dist[u] + this.edges[u][neighbor];


				if(alt < dist[neighbor]) {
					dist[neighbor] = alt;
					//console.log(dist);
				}
			}
		}

		return dist;
	}
}

function _isEmpty(obj) {
	return Object.keys(obj).length === 0;
}

function _extractMin(Q, dist) {
	let minimumDistance = Infinity;
	let nodeWithMinimumDistance = null;

	for(let node in Q) {
		if(dist[node] <= minimumDistance) {
			minimumDistance = dist[node];

			nodeWithMinimumDistance = node;
		}
	}

	return nodeWithMinimumDistance;
}

let digraph1 =new  UndirectedGraph();
let n = 10;
//let edges = [[0,1],[1,2],[2,0]];
let edges =  [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]];
let source = '5';
let dis = '9';


var validPath = function(n, edges, source, destination) {
    let res = [];

	for(let i = 0; i < n; i++) {
		digraph1.addVertex(i);
	}


	for(let i = 0; i < edges.length; i++){
		for(let j= 0;j < edges[0].length; j++){
			if(edges[i][j + 1]) {

				console.log(edges[i][j], edges[i][j + 1]);
				digraph1.addEdge(edges[i][j], edges[i][j + 1], 1);
			}
		}
	} 

	digraph1.traverseBFS(source, destination);

	 /* console.log(digraph1);
	 
	 console.log(digraph1.Dijkstra('5'));

	let obj = digraph1.Dijkstra(source);

	for(let [k, v] of Object.entries(obj)) {
		if(destination == k && v != Infinity) {
			return true;
		}

	} */

		return false;
};

console.log(validPath(n, edges, source, dis));
