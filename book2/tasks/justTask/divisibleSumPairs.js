// const allComination = (arr) => {
//     let results = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             results.push(`${arr[i]} ${arr[j]}`);
//         }
//     }

//     return results;
// }


const divisbleSumPairs = (n, k, arr) => {
    // const allcombinationArr = allComination(arr);
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {

            // console.log(arr[i], arr[j]);
            if ((arr[i] + arr[j]) % k == 0 && i !== j) {

                res.push([arr[i], arr[j]]);
            }
        }
    }
    let temp = "";
    let unique = res.sort((a, b) => a[0] - b[0]).filter(item => {

        if (item.join("") !== temp) {
            temp = item.join("");
            return true;
        }
    });
    console.log(unique.length);
    // for (let i = 0; i < allcombinationArr.length; i++) {
    //     // \S means "a non-whitespace character"
    //     let currentArrayListString = allcombinationArr[i].split("").filter((entry) => /\S/.test(entry));
    //     currentArrayListString.filter(() => {
    //         return ((currentArrayListString[0] + currentArrayListString[1]) % k == 0)
    //     });
    //     console.log(currentArrayListString);
    // }


}

divisbleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);