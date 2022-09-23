const FindNumbers = (a, b) => {
    const arr = [];
    if (a < b) {

        for (let i = a; i <= b; i++) {
            arr.push(i);
        }

    }
    return arr;
}

console.log(FindNumbers(1, 6));
console.log(FindNumbers(1, 4));
console.log(FindNumbers(5, 11));
console.log(FindNumbers(-1, 4));