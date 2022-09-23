

const isPalindrom = (str) => {
    const initStr = str.toLowerCase();
    if (initStr[0] === initStr[initStr.length - 1]) {

        return true;
    }

    return false;
}

console.log(isPalindrom("потоп"));
console.log(isPalindrom("Топот"));
console.log(isPalindrom("Молод"));