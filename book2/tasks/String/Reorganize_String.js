/**
 * @param {string} s
 * @return {string}
 */

/* Input: s = "aab"
	Output: "aba" 

	Input: s = "aaab"
	Output: ""

*/



var reorganizeString = function(s) {
    let reverse = "";
    let length = s.length;
    let index = 0;
    let arrStr = [];
    
    const map = new Map();
    
    s.split("").forEach(letter => {
        map.set(letter, map.get(letter) + 1 || 1);
        
    });
    
     const sorMap = new Map([...map.entries()].sort((a, b) => b[1]-a[1]));
    
    console.log(sorMap);
  
     if(sorMap.values().next().value > (s.length+1)/2) return "";
    
    
//     for(let i = length - 1; i >= 0; i--) {
//         reverse = reverse + s.charAt(i);
//     }
    
//     if(s === reverse) {
//         return reverse;
//     }else  {
        
//     }
    
       for(let [key, value] of sorMap) {
           while(value--) {
               if(index >= s.length) index = 1;
               
               arrStr[index] = key;
               index += 2;
           }
       }
    
        
    console.log(arrStr);
    return arrStr.join("");
};


reorganizeString("aab");