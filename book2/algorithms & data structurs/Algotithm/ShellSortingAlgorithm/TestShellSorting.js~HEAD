function shellSort(arr) {
    let middle = parseInt(arr.length / 2);
    for (let gap = middle; gap > 0; gap = parseInt(gap / 2)) {
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            while (j - gap >= 0 && arr[j] < arr[j - gap]) {
                swap(arr, j, j - gap);
                j = j - gap;
            }
        }
    }
}

function swap(arr, a, b) {
    arr[a] = arr[a] + arr[b];
    arr[b] = arr[a] - arr[b];
    arr[a] = arr[a] - arr[b];

}

var scores = [9, 6, 5, 8, 0, 7, 4, 3, 1, 2];
shellSort(scores);
console.log(scores);