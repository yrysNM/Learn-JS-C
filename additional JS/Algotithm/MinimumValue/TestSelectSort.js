class SelectSort {
    static sort(arr) {
        let len = arr.length - 1;

        let minIndex;

        for (let i = 0; i < len; i++) {
            minIndex = i;

            let minV = arr[minIndex];

            for (let j = i; j < len; j++) {
                if (minV > arr[j + 1]) {
                    minV = arr[j + 1];
                    minIndex = j + 1;
                }
            }

            if (i != minIndex) {
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }
}

let scores = [90, 70, 50, 80, 60, 85];
SelectSort.sort(scores);

console.log(scores);