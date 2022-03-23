/**
 * @param {string} s
 * @return {string}
 */


const reverseWords = (s) => {
    let arrStr = [...s];
    let new_str = arrStr.reverse().join("");

    let newarr = new_str.split(" ");

    return newarr.reverse().join(" ");
};

//test
let s = "Let's take LeetCode contest";

console.log(reverseWords(s));           // => s'teL ekat edoCteeL tsetnoc