const max = (arrays) => {
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] > arrays[i + 1]) {
            let temp = arrays[i];
            arrays[i] = arrays[i + 1];
            arrays[i + 1] = temp;
        }
    }
    let maxValue = arrays[arrays.length - 1];
    return maxValue;
}


const scores = [60, 50, 95, 80, 70];
let maxValue = max(scores);

console.log(maxValue);