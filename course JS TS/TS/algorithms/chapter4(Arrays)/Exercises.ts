// /**
//  * @example for in
//  */

// let array1: string[] = ['all', 'cows', 'are', 'big'];

// for (let index in array1) {
//     console.log(array1[index]);
// }

// /**
//  *  @example for of
// */

// for(let element of array1) {
//     console.log(element)
// }

/**
 * @descr FIND TWO ARRAY ELEMENTS IN AN ARRAY THAT ADD UP TO A NUMBER
 */

function findTwoNumbers(arr: number[], target: number) {
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                console.log(arr[i], arr[j]);
            }
        }
    }
}

findTwoNumbers([1, 2, 3, 4, 5], 9);


function findTwoNumbers2(arr: number[], target: number) {
    let start = 0;
    let end = arr.length - 1;
    arr.sort((a, b) => (a - b));

    while (start < end) {
        console.log(arr[start], arr[end])
        if (arr[start] + arr[end] === target) {
            return [start, end];
        }

        if (arr[start] < target) {
            end--;
        }else {
            start++;
        }
    }
}

console.log(
    findTwoNumbers2([1, 2, 3, 4, 5], 9)
);