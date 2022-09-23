// function uniqueArray(arr) {
//     let obj = {}; 
//     let last=  null;
//     for(let i = 0; i < arr.length; i++) {
//         let currentEl = arr[i]; 
//         last = null;
//         if(currentEl != last) {
//             if(!obj[currentEl]) {
//                 obj[currentEl] = 1;
//             }else {
//                 obj[currentEl]++;
//             }
//         }
//         last = currentEl;
        
//     }

//     return Object.keys(obj);

//     // console.log(obj);
//

const arr = [1, 2, 1, 3, 2, 5, 9];
// console.log(uniqueArray(arr));


const getUniqe = () => {
    const res = {};
    const arr2 = [];
    for(let i of arr){
        res[i] = 'wqe';
    }
    for(let key of Object.keys(res)){
        arr2.push(key);
    }
    return arr2;
};

console.log(getUniqe());