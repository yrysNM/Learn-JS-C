class Graph {
	constructor() {
		this.edges= {};
		this.adjList;
	}

	addVertex(vertex) {
		this.edges[vertex] = {};
	
	}

	addVertexList(V) {


		this.initAdjList(V);
	}

	addEdge(vertex1, vertex2, weight) {
		if(weight == undefined) {
			weight = 0;
		}

		this.edges[vertex1][vertex2] = weight;
		this.adjList[vertex1].push(vertex2);
	}

	convert() {
		let V = [], graph,  count; 

		for(let vertex in this.edges) {
			V.push(vertex); 
			count++;
		}


		graph = Matrix(count, count);

		for(let i =0;i < V.length;i++) {
			for(let j = 0;j < V.length; j++) {
				graph[i][j] = this.edges[V[i]][V[j]];
			}
		}

		for(let  i = 0; i < graph.length;  i++) {
			for(let j = 0; j < graph[0].length; j++) {
				if(graph[i][j] == null) {
					graph[i][j] = 0;
				}
			}
		}

		return graph;
	}

	getVertex(ver) {
		let V = 0; 
		for(let vertex in this.edges) {
			V++;
		}

		return V;
	}

	initAdjList(v) {


		 this.adjList = new Array(v);

		for(let i = 0; i < v; i++) {
			 this.adjList[i] = [];
		}
	}

	printAllPaths(source, dis) {
		let V = this.getVertex();
		let isVisited = new Array(V);
		
		for(let i = 0; i< V; i++) {
			isVisited[i] = false; 

		}
		let pathList = [];

		pathList.push(source);

		this.printAllPathsUtil(source,dis, isVisited, pathList);
	}

	printAllPathsUtil(s, d, isVisited, localPathList) {
		if(s == (d)) {
			console.log(localPathList);
			return;
		}

		isVisited[s] = true;
			

		for(let i = 0;  i <  this.adjList[s].length; i++) {

			if(!isVisited[this.adjList[s][i]]) {
			
				localPathList.push(this.adjList[s][i]);
				this.printAllPathsUtil(this.adjList[s][i], d, isVisited, localPathList);
			
				localPathList.splice(localPathList.indexOf(this.adjList[s][i]), 1);

			}
		}

		isVisited[s] = false;
		
	}
}


let g = new Graph();

g.addVertexList(4);

for(let i =0;  i < 4;  i++) {
	g.addVertex(i);
}

g.addEdge(0, 1);
g.addEdge(0, 2); 
g.addEdge(0, 3);
g.addEdge(2, 0); 
g.addEdge(2, 1);
g.addEdge(1, 3);
console.log(g.adjList);
console.log(g.printAllPaths(2, 3));