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


function sumCycleArray(Strarr) {
    let firstValue = Strarr.splice(" ");
   
    let arr = [];

    for(let i =0;  i< firstValue.length; i++) {
        if(firstValue[i] != " ") {
            arr.push(firstValue[i]);
        }
    }

    let checkCycle = new Array(arr.length);

    checkCycle[0] = true;

    let i = 1;
    while(i < arr.length) {
        for(let j = 0; j< i; j++) {
            if(checkCycle[j] && arr[j] + j >= i) {
                checkCycle[i] = true;
                break;
            }
        }

        i++;
    }

    if(checkCycle[arr.length - 1] != null) {
        return true;
    }else{
        return false;
    }

}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    let n = parseInt(readLine());
    let Strarr = "";

    Strarr = readLine();

    
    const result = sumCycleArray(Strarr);
    
    ws.write(result + "\n");
    ws.end();
    
    
}