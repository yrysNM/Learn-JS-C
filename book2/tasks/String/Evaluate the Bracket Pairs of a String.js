/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */


var evaluate = function(s, knowledge) {
 
    
    let hashTable = {};
    
    for(let i =0; i< knowledge.length; i++) {
     
            hashTable[knowledge[i][0]] = knowledge[i][1];
    }
    
    console.log(hashTable);
    let res = {
        '0': s
    };
    let indexs = {
        'validL': [],
        'validF': [],
    };
    
//     for(let [k, v] of Object.entries(hashTable)) {
        
//         console.log(boyerMoore(s, k), v);
//         indexs[k] = boyerMoore(s, k) - 1;
//     }

    for(let i =0; i< s.length; i++) {
        let currentChar = s.charAt(i);

        if(currentChar == ")") {
            indexs['validL'].push([i + 1]);
        }
        
        if(currentChar == "(") {
            indexs['validF'].push([i]);
        }
    }
    
    console.log(indexs);
    for(let[k, v] of Object.entries(hashTable)) {
        while(res['0'].indexOf(`(${k})`) != -1) {
            
            res['0'] = res['0'].replace(`(${k})`, v);
           
        }

    }
    
    for(let[k, v] of Object.entries(hashTable)) {

        if(res['0'].indexOf(`(${k})`) == -1) {
           for(let i = 0; i < indexs.validF.length; i++) {
                
              res['0'] = res['0'].replace(s.substring(indexs.validF[i][0], indexs.validL[i][0]), "?"); 
            }
        }
    }
    
    if(knowledge.length == 0 || !knowledge) {
          for(let i = 0; i < indexs.validF.length; i++) {
                
              res['0'] = res['0'].replace(s.substring(indexs.validF[i][0], indexs.validL[i][0]), "?"); 
            }
    }
    // for(let[k, v] of Object.entries(indexs)) {
    //     for(let i = 0; i < indexs.valid.length; i++) {
    //           console.log(s.substring(v, indexs.valid[i][0]));  
    //         res = s.replace(s.substring(v, indexs.valid[i][0]), hashTable[k]);
    //     }
    // }
    
     console.log(res);
    return res['0'];
};