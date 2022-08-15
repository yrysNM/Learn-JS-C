/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

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
      //  this.edges[vertex2][vertex1] = weight;
    }
    
    BFS(headID, arr, informTime) {
        let queue = [[headID, 0]];
        let sum = 0;
        
        while(queue.length) {
            let size = queue.length;
            for(let  i =0; i< size; i++) {
                const [manager, time] = queue.shift();
                const empl = this.edges[manager];
                
                sum = Math.max(sum, time);
                
                for(let adj in empl) {
                    let newTime = time + informTime[manager];
                    queue.push([adj, newTime]);
                }
                
            }
        }
        
        arr.push(sum);
    }
}


var numOfMinutes = function(n, headID, manager, informTime) {
    let g = new Graph();
    let res = 0;
    
    for(let i =0; i<n; i++) {
        g.addVertex(i);    
    }
    
    for(let i =0; i< manager.length; i++) {
       //if(manager[i] != -1) {
   
            if (i === headID) continue;
        
            g.addEdge(manager[i], i, informTime[i]);
            
     //  }
        

        
    }
    
    let arr = []; 
    g.BFS(headID, arr, informTime);
    
    console.log(g, arr);

     
    
    return !isNaN(arr[arr.length - 1]) ? arr[arr.length - 1] : 0;
};