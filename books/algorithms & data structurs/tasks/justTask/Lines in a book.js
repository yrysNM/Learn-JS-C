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
    return inputString[currentLine++];
}

function linesBook(n1, n2) {


    let numberLines = parseInt((n2 / n1) + 1); 
    let numberString = parseInt(n2 % n1);


    return numberLines + " " + numberString;

}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    let n = readLine(); 
    let n2 = readLine();

    const result = linesBook(n, n2);

    ws.write(result + "\n");
    ws.end();
}