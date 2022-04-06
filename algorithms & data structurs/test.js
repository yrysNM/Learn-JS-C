

// const fs = require('fs');
// 
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// 
// let inputString = '';
// let currentLine = 0;
// 
// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });
// 
// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');
// 
//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }


const readLine = require("readline");


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

		return this.printAllPathsUtil(source,dis, isVisited, pathList);

	}

	printAllPathsUtil(s, d, isVisited, localPathList, count = 0) {
		let ans = [];
		//let count= 0;
		if(s == (d)) {
			ans.push(count);
			res(ans);

			console.log(localPathList, new_arr);
			return;
		}

		isVisited[s] = true;
			

		for(let i = 0;  i <  this.adjList[s].length; i++) {

			if(!isVisited[this.adjList[s][i]]) {
			
			
				localPathList.push(this.adjList[s][i]);
				count++;
				this.printAllPathsUtil(this.adjList[s][i], d, isVisited, localPathList, count);
			
				
				
				localPathList.splice(localPathList.indexOf(this.adjList[s][i]), 1);

			}
		}

		isVisited[s] = false;
		
	}
}

let resultPath = 0;

function res(ar) {
	resultPath = ar[ar.length - 1];
}


function path(n, e, source, dis, adjE) {
	let g = new Graph();

	g.addVertexList(n);

	let test = ""; 
	for(let i = 0; i< adjE.length;  i++ ) {
		for(let j = 0; j < adjE[0].length; j++) {
			test = adjE[i][j];
			g.addEdge(test[0], test[test.length - 1]);
		}
	}

	g.printAllPaths(source, dis);

	return resultPath;
}



function main() {
	const ws = readLine.createInterface(process.stdin, process.stdout);
	let n = 0, e, source, dis, adjE;
	ws.question("Nodes: ", (node) => {
		n = node;
			ws.question("Edges: ", (edges) => {
				e = edges;
			});
	});



// 
// 	let n = parseInt(readLine());
// 	let e = parseInt(readLine());
// 	let source = parseInt(readLine());
// 	let dis = parseInt(readLine());
// 	let adjE = [];
// 	for(let i = 0; i < n; i++) {
// 	
// 		adjE.push([readLine()]);
// 	
// 	}

	// const result= path(n, e, source, dis, adjE);

// 	ws.write(result + "\n");
// 
// 	ws.end();

}

main();



// let g = new Graph();
// 
// g.addVertexList(4);
// 
// for(let i =0;  i < 4;  i++) {
// 	g.addVertex(i);
// }
// 
// g.addEdge(0, 1);
// g.addEdge(0, 2); 
// g.addEdge(0, 3);
// g.addEdge(2, 0); 
// g.addEdge(2, 1);
// g.addEdge(1, 3);
// // console.log(g.adjList);
// console.log(g.printAllPaths(2, 3));
