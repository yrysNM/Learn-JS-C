for (let i = 5; i <= 10; i++) {
    console.log(i);
}

for (let i = 20; i >= 10; i--) {
    console.log(i);
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++
        continue;
    } else {
        console.log(i);
    }
    i++;
}

let arr = [];


for (let i = 5; i <= 10; i++) {
    arr.push(i);
}

console.log(arr);


// task2

const result = [];

for (let i of arr) {
    result.push(i);
}
console.log(result);

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] == "string") {
            data[i] = data[i] + " - done";
        } else {
            data[i] *= 2;
        }
    }

    // Не трогаем
    return data;
}
console.log(secondTask());


// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    let result = [];

    // Пишем решение вот тут
    // result = data.reverse();
    for (let i = data.length - 1; i >= 0; i--) {
        result.push(data[i]);
    }
    // Не трогаем
    return result;
}

console.log(thirdTask());

const lines = 5;

let result2 = "";

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result2 += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        result2 += "❤️";
    }
    result2 += "\n";
}

console.log(result2);