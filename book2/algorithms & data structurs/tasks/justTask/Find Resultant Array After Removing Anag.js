function buildCharObject(str) {
    const charObj = {}; 
    str = str.toUpperCase().replace(/[^\w]/g, " ");

    for(let char of str) {
        charObj[char] = charObj[char] + 1 || 1;
    }

    return charObj;
}

function anagram(str1, str2) {
    const aCharobj = buildCharObject(str1); 
    const bCharobj = buildCharObject(str2); 

    if(Object.keys(aCharobj).length !== Object.keys(bCharobj).length) {
        return false;
    }

    for(let char in aCharobj) {
        if(aCharobj[char] !== bCharobj[char]) {
            return false;
        }
    }

    return true;
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
 var removeAnagrams = function(words) {
    let set = new Set(words);
    let res = Array.from(set);
    let count = 0;
    for(let i = 0; i < words.length; i++) {

        if(words[i + 1]) {
            if(anagram(words[i], words[i + 1])) {
                count++;
                //console.log(anagram(words[i], words[i + 1]));
                //console.log(i, words[i], i + 1, words[i + 1]);
                res.splice(i + 1, 1);
            }
        }
    }

    console.log(res, words);
};
// not finished
const words = ["z","z","z","gsw","wsg","gsw","krptu"];
const words2 = ["abba","baba","bbaa","cd","cd"];
removeAnagrams(words);
removeAnagrams(words2);
