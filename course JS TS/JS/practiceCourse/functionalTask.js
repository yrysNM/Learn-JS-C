function getTimeFromMinutes(time) {
    if (!Number.isInteger(time) || time < 0) {
        return "Ошибка, проверьте данные"
    }

    return `Это ${Math.floor(time / 60)} часа и ${time - 60 * Math.floor(time / 60)} минут`;
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));

function findMaxNumber(a, b, c, d) {
    let arr = [a, b, c, d];

    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && arr[i] > 0) {
            if (max < arr[i]) {
                max = arr[i];
            }
        } else {
            max = 0;
        }
    }

    return max;
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));


// task 3
function fib(fibLength) {
    let num = 0;
    let obj = {
        0: 0,
        1: 1,
    }
    for (let i = 1; i < fibLength; i++) {
        obj[i + 1] = 0;
    }
    for (let i = 1; i < fibLength; i++) {
        obj[i + 1] += parseInt(obj[i] + obj[i - 1]);
    }

    console.log(Object.values(obj).slice(0, fibLength));

    return Object.values(obj).slice(0, fibLength).join(" ");
}

console.log(fib(7));