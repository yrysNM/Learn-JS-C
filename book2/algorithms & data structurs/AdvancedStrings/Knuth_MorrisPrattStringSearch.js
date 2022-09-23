function longestPrefix(str) {
    //prefix array is created
    let prefix = new Array(str.length);
    let maxPrefix = 0; 
    //start the prefix at 0
    prefix[0] = 0; 
    for(let i = 1; i < str.length; i++) {
        //decrement the prefix value as long as there are mismaches
        while(str.charAt(i) !== str.charAt(maxPrefix) && maxPrefix > 0) {
            maxPrefix = prefix[maxPrefix - 1];

        }

        //strings match, can update it
        if(str.charAt(maxPrefix) === str.charAt(i)) {
            maxPrefix++;
        }

        //set the prefix
        prefix[i] = maxPrefix;
    }
    return prefix;
}

console.log(longestPrefix("ababaca")); /** => 
[
  0, 0, 1, 2,
  3, 0, 1
]
 */

function  KMP(str, pattern) {
    //build the prefix table
    let prefixTable = longestPrefix(pattern),
        patternIndex = 0,
        strIndex = 0;

    while(strIndex < str.length) {
        if(str.charAt(strIndex) != pattern.charAt(patternIndex)) {
            //Case 1: the characters are different
            if(patternIndex != 0) {
                //use the prefix table if possible
                patternIndex = prefixTable[patternIndex - 1];
            }else {
                //increment  the str index to next character
                strIndex++;
            }
        }else if(str.charAt(strIndex) == pattern.charAt(patternIndex)) {
            //Case 2: the characters are same
            strIndex++; 
            patternIndex++; 

        }

        //found the pattern
        if(patternIndex == pattern.length) {
            return true;
        }
    }
    return false;
}

console.log(KMP("ababacaababacaababacaababaca",  "ababaca"));   // => true
console.log(KMP("sammiebae", "bae"));                           //true
console.log(KMP('sammiebae', 'sammiebaee')); // false);