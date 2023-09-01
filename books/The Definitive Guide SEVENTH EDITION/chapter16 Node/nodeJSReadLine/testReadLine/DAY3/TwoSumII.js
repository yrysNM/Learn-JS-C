const readLine = require("readline");

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


function twoSum(nums, target) {
    let arr = [0, 1];
    nums.sort((a,b) => a -b);

    for(let i = 0; i < nums.length; i++) {
        for(let j= i + 1; j < nums.length; j++) {
            if(+nums[i] + +nums[j] == target) {
                arr = [i + 1, j + 1];

                return [i + 1, j + 1];
            }
        }
    }

    return arr;
}

function findSumBetter(arr, weight) {
    var hashtable = {};

    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        var currentElement = arr[i],
            difference = weight - currentElement;

        // check the right one already exists
        if (hashtable[currentElement] != undefined) {
            return [i, hashtable[currentElement]];
        } else {
            // store index
            hashtable[difference] = i;
        }
    }
    return -1;
}


function main() {
    const RL = readLine.createInterface(process.stdin, process.stdout);

    RL.question("Target: ", (target) => {
        RL.on("line", (arr) => {
            let new_arr = arr.split(",");

            console.log(findSumBetter(new_arr, target));
        });
    });

}

main();