/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let hashTable = {
        "1": "I",
        "5": "V",
        "10": "X",
        "50":  "L",
        "100": "C",
        "500": "D",
        "1000": "M"
    };
    let res = "", sum = 0;
    

    let hashMap = {};
    let keys = Object.keys(hashTable);
    let last = 0, answer = [];

    //for(let i = 0; i < keys.length; i++) {
      //  while(sum != num && keys[i] != num) {

        //   let numK = +keys[i];
          //      sum += numK;
let baseCase= true;
                //console.log(keys[i]);
                 for(let i  = 0; i < keys.length; i++) {
                    // let numK = +k;
                     while(baseCase) {
                        // last += +keys[i];
                        if(sum != num && keys[i] <= num && hashTable[keys[i]]) {
                            sum +=  +keys[i];
                            keys[i]++;
                          //  baseCase = false;
                        }

                        if(sum == num) {
                            console.log(hashTable[keys[i]]);
                            baseCase = false;
                        }
                       
//                            if(hashTable[k]) {
//                             last += +k;
// 
//                             console.log(hashTable[k], k, last);
//                            } 
                     }
                 }
              
            

      //  }
    //}

    console.log(hashMap, sum)


    
    let str = [];
    for(let i = res.length;i >= 0; i--){
        let letters = res.charAt(i);
        
        
        str.push(letters);
    }
    console.log(str);
   // return str.join("");
};

//test
let num = 58;
intToRoman(num); 