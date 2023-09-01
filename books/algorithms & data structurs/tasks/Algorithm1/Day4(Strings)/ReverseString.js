/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //solve1
    // return s.reverse();

    //solve2
    let new_str = []; 
    
    for(let i = s.length - 1;  i >= 0; i--) {
        new_str.push(s[i]);
    }
    s.length= 0;
    s.push(...new_str);

    return s;
};

let s =  ["H","a","n","n","a","h"];
reverseString(s);