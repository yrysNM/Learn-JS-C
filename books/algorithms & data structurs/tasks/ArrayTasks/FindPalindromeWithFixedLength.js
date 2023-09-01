/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */

/* 
Input: queries = [1,2,3,4,5,90], intLength = 3
Output: [101,111,121,131,141,999]
Explanation:
The first few palindromes of length 3 are:
101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 201, ...
The 90th palindrome of length 3 is 999.
 
*/



var kthPalindrome = function(queries, intLength) {
    let res = [];
    for(let i = 0; i < queries.length; i++) {

        res.push(nthPalindrome(queries[i], intLength));
    
    }
    return res;
};



function nthPalindrome(n, k) {
    let num = Number(Math.pow(10, k - 1));

    while(true) {
        if(isPalindrom(num)) {
            --n;
        }

        if(n == 0)
            break;


        ++num;
    }

    return num;
}

function reverseNum(n) {
    let reverse = 0, dev; 

    while(n > 0) {
        dev = n % 10; 
        reverse = reverse * 10 + dev; 
        n = parseInt(n / 10);
    } 

    return reverse;
}

function isPalindrom(num) {
    return num == reverseNum(num);
}


let queries = [1,2,3,4,5,90], intLength = 3;

console.log(kthPalindrome(queries, intLength));