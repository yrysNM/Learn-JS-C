const minMaxSum = (arr) => {
    arr.sort((a, b) => a - b);
    let x = 0;
    let y = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        x += arr[i];
    }

    for (let i = 1; i < arr.length; i++) {
        y += arr[i];
    }

    return x + " " + y;
}