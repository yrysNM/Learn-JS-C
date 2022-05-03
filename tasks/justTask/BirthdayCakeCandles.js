'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let hashObj = {}; 
    let last;
    for(let i = 0; i < candles.length; i++) {
        let currentEl =  candles[i];
        last = null; 
        if(currentEl != last) {
            if(!hashObj[currentEl]) {
                hashObj[currentEl] = 1;
            }else {
                hashObj[currentEl]++;
            }
        }
        last = currentEl;    
        
    }
    let max = 0;
    for(let[k, v] of Object.entries(hashObj)) {
        max = Math.max(k);
    }
    return hashObj[max];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
