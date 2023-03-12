class InsertSort {
    static sort(arr) {
        for (let i = 0; i < arr.length; i++) {
            let insertElement = arr[i];
            let insertPosition = i;
            for (let j = insertPosition - 1; j >= 0; j--) {
                if (insertElement < arr[j]) {
                    arr[j + 1] = arr[j];
                    insertPosition--;
                }
            }
            arr[insertPosition] = insertElement;
        }
    }
}

let scores = [90, 70, 50, 80, 60, 85];
InsertSort.sort(scores);
console.log(scores);