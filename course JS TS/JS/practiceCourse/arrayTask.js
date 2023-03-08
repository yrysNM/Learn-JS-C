const someString = 'This is some strange string';

function reverse(str) {
    let reverStr = str.split(" ").reverse().join(" ");

    let res = [];

    let arr = reverStr.split(" ");
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i].split("").reverse().join(""));
    }

    return res.join(" ");
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    // let allValute = baseCurrencies.concat(additionalCurrencies);
    let filterArr = arr.filter(ar => ar !== missingCurr);

    console.log("Доступные валюты:");
    filterArr.forEach(f => {
        console.log(f);
    })
}

availableCurr(baseCurrencies, "USD");