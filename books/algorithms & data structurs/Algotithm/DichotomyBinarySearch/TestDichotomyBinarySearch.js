class BinarySearch {
    static search(arr, searchValue) {
        let low = 0;
        let high = arr.length - 1;
        let mid = 0;

        while (low <= high) {
            mid = (low + high) / 2;
            if (arr[mid] === searchValue) {
                return mid;
            } else if (arr[mid] < searchValue) {
                low = mid + 1;
            } else if (arr[mid] > searchValue) {
                high = mid - 1;
            }
        }
    }
}

let scores = [30, 40, 50, 70, 85, 90, 100];

let position = BinarySearch.search(scores, 40);
console.log(scores[position], position);
