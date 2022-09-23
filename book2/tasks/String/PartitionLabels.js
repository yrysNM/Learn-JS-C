/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let hashTable = {}; 
    let last; 
    let res = [];
    /* for(let i =0; i< s.length; i++) {
        last = null; 
        let currentElement = s[i];

        if(last != currentElement) {
            if(!hashTable[currentElement]) {
                hashTable[currentElement] = 1;
            }else  {
                hashTable[currentElement]++;
            }
        }
           last = currentElement;
    } */
    for(let i = 0; i < s.length; i++) {
        hashTable[s.charAt(i)] = i;
    }

    let size = 0,  end = 0;
    for(let i = 0;i < s.length; i++) {
        size++; 
        end = Math.max(end, hashTable[s.charAt(i)]);

        if(i == end) {
            res.push(size);
            size = 0;
        }
    }

    return res;
};


let  s = "ababcbacadefegdehijhklij";
let s2 = "eccbbbbdec";

console.log(partitionLabels(s));
console.log(partitionLabels(s2));