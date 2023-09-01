class RabinkarpSearch {
    constructor() {
        this.prime = 101;
    }

    rabinkarpFingerprintHash(str, endLength) {
        if(endLength == null) {

            endLength = str.length; 
        }
        let hashInt = 0; 
        for(let i = 0; i < endLength; i++) {
            hashInt += str.charCodeAt(i) * Math.pow(this.prime, i);
        }
        return hashInt;
    }

    recalculateHash(str, oldIndex, newIndex, oldHash, patternLength) {
        if(patternLength == null) {
            patternLength = str.length; 

        }
        let newHash = oldHash - str.charCodeAt(oldIndex); 
        newHash = Math.floor(newHash/this.prime); 
        newHash += str.charCodeAt(newIndex) * Math.pow(this.prime, patternLength - 1);
        return newHash;
    }

    strEquals(str1, startIndex1, endIndex1, str2, startIndex2, endIndex2) {
        if(endIndex1 - startIndex1 != endIndex2 - startIndex2) {
            return false;
        }

        while(startIndex1 <= endIndex1 && startIndex2 <= endIndex2) {
            if(str1[startIndex1] != str2[startIndex2]) {
                return false;
            }
            startIndex1++; 
            startIndex2++;
        }
        return true;
    }

    rabinkarpSearch(str, pattern) {
        let T = str.length,
            W = pattern.length,
            patternHash = this.rabinkarpFingerprintHash(pattern, W),
            textHash = this.rabinkarpFingerprintHash(str, W);

        for(let i = 1; i <= T - W + 1; i++) {
            if(patternHash == textHash && this.strEquals(str, i - 1, i + W - 2, pattern, 0, W - 1)) {
                return i - 1;
            }

            if(i < T - W + 1) {
                textHash = this.recalculateHash(str, i - 1, i + W - 1, textHash, W);
            }
        }
        return -1;
    }
}


/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {

    let best = 0; 
    let bitSets = []; 
    for(let i = 0; i< words.length; i++) {
        let  wlen = words[i].length; 
        let bitset = 0; 
        for(let j = 0; j < wlen; j++) {
            bitset |= 1 << (words[i].charAt(j).charCodeAt(0) - "a".charCodeAt(0));
             
        }
        for(let j = 0; j < i; j++) {
            if((bitSets[j] & bitset) == 0) {
                best = Math.max(best, wlen * words[j].length);
                
            }

        }
        bitSets[i] = bitset;
    }

    return best;
    
};

const words = ["abcw","baz","foo","bar","xtfn","abcdef"];

console.log(maxProduct(words));