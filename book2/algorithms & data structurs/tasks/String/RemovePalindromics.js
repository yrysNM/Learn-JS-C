/**
 * @param {string} s
 * @return {number}
 */
 var removePalindromeSub = function(s) {
    let low = 0, high = s.length - 1;
    


    while(low < high) {
        if(s.charAt(low) == s.charAt(high)) {
            low++;
            high--;
        }else {
            if(isPalindrom(s, low + 1, high)) {
                return low;
            }

            if(isPalindrom(s, low, high - 1)) {
                return high;
            }
            return -1;
        }
    }
    return 1;
     // for(let i = 0; i< s.length; i++) {
    //     let el = s[i];
    //     if(el != null) {
    //         if(!obj[el]) {
    //             obj[el] = 1;
    //         }else {
    //             obj[el]++;
    //         }
    //     }
    // }



};

function isPalindrom(s, low, high) {

    while(low < high) {
        if(s.charAt(low) != s.charAt(high)) {
            return false;
        }
        low++; 
        high--;
    }
    return true;
}

console.log(removePalindromeSub("ababa"));
console.log(removePalindromeSub("abb"));