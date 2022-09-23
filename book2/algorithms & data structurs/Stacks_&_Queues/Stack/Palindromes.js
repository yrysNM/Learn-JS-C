const Stack = require("./Stack");

const isPalindrome = (word) => {
    let s = new Stack();
    for (let i = 0; i < word.length; i++) {
        s.push(word[i]);
    }

    let rWord = "";
    while (s.length() > 0) {
        rWord += s.pop();
    }
    if (rWord == word) {
        return true;
    } else {
        return false;
    }

}

let word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(`${word} isnot a palindrome.`);
}

word = "racecar";
if (isPalindrome(word)) {
    console.log(`${word} is a palindrome.`);
} else {
    console.log(`${word} isnot a palindrome.`);
}

