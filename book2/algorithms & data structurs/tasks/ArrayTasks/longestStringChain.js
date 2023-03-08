function longestStringChain(arr) {
    arr.sort((a, b) => a.length - b.length);
    const isPredecessor = (word1 = "", word2 = "") => {
        if(Math.abs(word1.length - word2.length) !== 1) {
            return false;
        };
        for(let i = 0;  i < word2.length; i++) {
            const word = word2.slice(0, i) + word2.slice(i + 1); 
            if(word == word1) {
                return true;
            }
        }
        return false;
    };

    const arrList= []; 
    let max = 0;
    for(let i = arr.length - 1;  i>= 0; i--) {
        arrList[i] = 1; 
        for(let j = arr.length - 1;  j> i; j--) {
            if(isPredecessor(arr[i],  arr[j])) {
                arrList[i] = Math.max(arrList[i], 1 + arrList[j]);
            }
        }
        max = Math.max(max, arrList[i]);
    }
    return max;
}

let  words = ["a","b","ba","bca","bda","bdca"]; 
console.log(longestStringChain(words));
