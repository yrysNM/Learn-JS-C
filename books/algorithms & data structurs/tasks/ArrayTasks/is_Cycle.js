'use strict';

const fs = require('fs'); 

process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
let inputString = "";
let currentLine = 0;


process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    
    inputString = inputString.split('\n');
    
    main();
});

function readLine() {
    return inputString[currentLine++]
}


function cycleArray(arr) {
    console.log(arr);
    let val = [...arr];
   
    let numbers = val.filter((item) => item != " ");
    
   for(let i =0; i < numbers.length; i++) {
       if(numbers[i] == '-') {
           numbers[i] = numbers[i] + numbers[i + 1];
       }
   }
    
    let listNumber = [];
    
    for(let i =0; i < numbers.length; i++) {
        listNumber.push(Number(numbers[i]));
    }
    
    let isCycle = new Array(listNumber.length);
    isCycle[0] = true;
    let k = listNumber[0];
    let sum = 0;
    
   for(let i =1; i< listNumber.length; i++) {
       for(let j= 0; j < i; j++) {
           if(isCycle[j] && listNumber[j] + j >= i) {
                isCycle[i] = true;
                break;
           }
       }
   }
    
    console.log(isCycle);
    
    return isCycle[listNumber.length - 1] == null ? false : true;
   

}

let arr = [2, 3, 1, -4, -4, 2];

console.log(cycleArray(arr));



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    let n = parseInt(readLine());
    let arr = "";
    
   // for(let i = 0; i < n; i++) {
        arr = readLine();
 //   }
    
    const result = cycleArray(arr);
    
    ws.write(result + "\n");
    ws.end();
    
    
}