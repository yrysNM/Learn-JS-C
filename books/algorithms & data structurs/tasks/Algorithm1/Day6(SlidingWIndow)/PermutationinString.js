/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function buildBadMatchTable(str) {
    let  tableObj = {};    
    let strLength = str.length;
    
    for(let i = 0; i < strLength - 1; i++) {
        tableObj[str[i]] = strLength - 1 - i;
    }
    
    if(tableObj[str[strLength - 1]] == undefined) {
        tableObj[str[strLength - 1]] = strLength;
    }
    
    return tableObj;
}

function boyerMoore(str, pattern) {
    let badMatchTable = buildBadMatchTable(pattern),
        offset = 0,
        patternLastIndex = pattern.length - 1,  
        scanIndex = patternLastIndex, 
        maxOffset = str.length - pattern.length;
    
    while(offset <= maxOffset) {
        scanIndex = 0; 
        while(pattern[scanIndex] == str[scanIndex + offset]) {
            if(scanIndex == patternLastIndex) {
                return offset;
            }
            
            scanIndex++;
        }
        
        let badMatchString = str[offset + patternLastIndex];
        if(badMatchTable[badMatchString]) {
            offset  += badMatchTable[badMatchString];
            
        }else {
            offset += 1;
        }
    }
    
    return -1;
}

const findPermutations = (string, s1) => {
    //console.log(string);
    if(string.length < 2) {
        return string;
    }

    let permutationArray = []; 
    let s1arr = s1.split("");
    for(let i = 0; i < string.length; i++) {
        let char = string[i];
        while(s1arr.length) {
            let temp = s1arr.shift();

            if(char == temp) {

                let  remainingChars = string.slice(0,  i) + string.slice(i + 1, string.length);
                
                for(let permutation of findPermutations(remainingChars)) {
                    permutationArray.push(char + permutation);
                }
            } 
        }


    }

    return permutationArray;
};

const perSubstr = (s1, s2) => {
    let m = s1.length; 
    let n = s2.length; 

    for(let i = 0; i <= n - m; i++) {
        let j; 

        /* FOr currentindex i, check for pattern match */
        for(j= 0; j < m; j++) {
            if(s2.charAt(i + j) != s1.charAt(j)) {
                break;
            }
        }
        
        if(j == m) {
            return i;
        }
        
    }
    return -1;
};

var checkInclusion = function(s1, s2) {
    let allPermutation = findPermutations(s1, s2);
   // let persubstr = perSubstr(s1, s2);

    console.log(allPermutation);
    // for(let v of allPermutation) {
    //     if(boyerMoore(v, s1) != -1) {
    //         return true;
    //     }
    // }
    return false;
    // let newstr = [...s2].reverse().join("");
    // let compare = boyerMoore(s2, s1);
    // let compareTo = boyerMoore(newstr, s1);
    // console.log(compareTo, compare);
    //return compareTo != -1 || compare != -1 ? true : false;
    // console.log(newstr);
    // console.log(s1.indexOf(newstr));
};

console.log(checkInclusion('ab', 'eidbaooo')); 