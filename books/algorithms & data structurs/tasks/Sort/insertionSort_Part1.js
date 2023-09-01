/*
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
    // Write your code here
    for(let i = 1; i < arr.length; i++ ) {
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j -= 1;
             console.log((arr + " ").split(",").join(" "));
        }
        arr[j + 1] = key;
        
       
    }
   console.log(arr.join(" "));
}


insertionSort1(5, [2, 4, 6, 8, 3]);  // =>
 /* 2 4 6 8 8 
	2 4 6 6 8 
	2 4 4 6 8 
	2 3 4 6 8 */