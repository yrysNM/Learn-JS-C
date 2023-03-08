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


function buyDay(arr) {
    let val = [...arr];

    let numbers = val.filter((item) => item != " ");

    for(let i = 0; i< numbers.length; i++) {
        if(numbers[i] == "-") {
            numbers[i] = numbers[i] + numbers[i + 1];
        }        
    }

    let listNumber = [];

    for(let i =0; i < numbers.length; i++) {
        listNumber.push(Number(numbers[i]));
    }

    let max = 0; 
    
    if(listNumber.length == 0) return 0; 
    
    for(let i = 1; i < listNumber.length; i++) {
        if(listNumber[i] > listNumber[i - 1]) {
            max += listNumber[i] - listNumber[i - 1];
        }
    }
    
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    let n = parseInt(readLine());

    let arr = "";

    arr = readLine();

    const result = buyDay(arr);

    ws.write(result + "\n");
    ws.end();
}