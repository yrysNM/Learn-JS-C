class BubbleSort {
    static sort(arrays) {
        for (let i = 0; i < arrays.length - 1; i++) {
            for (let j = 0; j < arrays.length - i - 1; j++) {
                if (arrays[j] > arrays[j + 1]) {
                    let temp = arrays[j];
                    arrays[j] = arrays[j + 1];
                    arrays[j + 1] = temp;
                }
            }
        }
    }
}

let scores = [60, 50, 95, 80, 70];

BubbleSort.sort(scores);
console.log(scores);