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

	Dijkstra(source) {
		let Q = {},
			dist = {};

		for(let vertex  in this.edges) {
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


				}
			}
		}

		return dist;
	}
}


function _isEmpty(obj) {
	return Object.keys(obj).length == 0;
}

function _extractMin(Q, dist) {
	let min_Dist = Infinity;
	let node_minDist = null; 

	for(let node in Q) {
		if(dist[node] <= min_Dist) {
			min_Dist = dist[node];

			node_minDist = node;
		}
	}

	return node_minDist;
}


var networkDelayTime = function(times, n, k) {
	let g = new Graph();

	for(let i = 1; i<= n ; i++) {
		g.addVertex(i);
	}

	for(let i =0; i< times.length; i++) {
		g.addEdge(times[i][0], times[i][1], times[i][2]);
	}

	let obj = g.Dijkstra(k);

	let  res = [];
	console.log(obj);
	for(let i =1; i <= n; i++) {
		if(obj[i] != Infinity) {
			res.push(obj[i]);
		}else {
			return -1;
		}
	}

	let ans = 0;

	ans = Math.max(...res);

	return ans;
};


let times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2;
console.log(networkDelayTime(times, n, k));