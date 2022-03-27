let findPermutations = (string) => {

 if (string.length < 2 ){
    return string
  }

  let permutationsArray = [] 
   
  for (let i = 0; i < string.length; i++){
    let char = string[i]

    if (string.indexOf(char) != i)
    continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }
  
  
  return permutationsArray;
}

// 
// const allPermutationCombinaiton = (str) =>{
//     if(str.length < 2) return str;
// 
//     let arr = []; 
// 
//     for(let i = 0; i < str.length; i++) {
//         let letter = str[i];
// 
//         let reverChar = str.slice(0, i) + str.slice(i + 1, str.length);
// 
//         for(let v of allPermutationCombinaiton(reverChar)) {
//             arr.push(letter + v);
//         }
//     }
// 
//     return arr;
// };


function checkDivisibility(arr) {
    let values = [];
    let allPermutation;
    let hashMap = {};
    for(let i =0; i < arr.length; i++) {
       // values.push(findPermutations(arr[i]));
        hashMap[arr[i]] = findPermutations(arr[i]);
       // allPermutation = findPermutations(arr[i]);
    }

    let res = {}; 
    let ans = {};
 //   let arr = [];
    for(let[k, v] of Object.entries(hashMap)) {
        ans[v] = k;
        for(let i = 0; i < v.length; i++) {
            
            if(+v[i] % 8 == 0) {
                res[v[i]] = "YES";
                
            }else {
                 res[v[i]] = "NO";
            }

        }

        
    }

    /* for(let [k, v] of Object.entries(res)) {
        res[v] = k;
    } */
    /* console.log(res["YES"]); */
    for(let[k, v]  of Object.entries(hashMap)) {
        for(let i = 0; i < v.length; i++) {
                
            if(res[v[i]] == "YES") {
                //console.log(true, k);
                hashMap[k] = "YES";
                // if(res[k[i]] == "YES") {
                //     hashMap[res[k[i]]] = "YES";
                // }
            }
        }
    }
    console.log(hashMap);

  // return res;
}


let arr = ["41", "512", "502", "4096", "2719890083", "36470692", "15", "61", "75"]; 

console.log(checkDivisibility(arr));