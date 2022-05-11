function someIndex(arr) {
    let obj =  {}, 
        last; 

    let indexArr = [], indexArr2 = {};
    
    for(let i = 0; i< arr.length; i++) {
        let currentEl= arr[i];
        last = null; 

        if(last != currentEl) {

            if(!obj[currentEl]) {
                obj[currentEl] = 1;
                indexArr2[currentEl] = [i];
               // indexArr.push(i);
            }else {
                indexArr2[currentEl].push(i);
                obj[currentEl]++;   
                
 
            }
        }

    

        last = currentEl;
    }


    for(let [k, v] of Object.entries(indexArr2)) {
        if(v.length >= 2) {
            for(let i =0; i< v.length; i++) {
                if(v[i + 1]) {
                    
                    indexArr.push(Math.abs(v[i] - v[i + 1]));
                }
            }
        }
    }
    
    return Math.min(...indexArr);

}

let arr = [7 , 3, 2, 1, 7, 3, 4, 1];
console.log(someIndex(arr));