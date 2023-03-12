function reverse(arrays) {
    let length = arrays.length;
    let middle = length / 2;

    for (let i = 0; i <= middle; i++) {
        let temp = arrays[i];
        arrays[i] = arrays[length - i - 1];
        arrays[length - i - 1] = temp;
    }
}

let scores = [50, 60, 70, 80, 90];
reverse(scores);
console.log(scores);
