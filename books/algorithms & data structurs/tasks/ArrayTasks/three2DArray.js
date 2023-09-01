const sumArrayZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let arrIndexList = [];
    // arr.sort((a, b) => b - a);
    while (left <= right) {
        for (let i = 1; i < arr.length; i++) {
            let currentArray = arr[i];
            console.log(currentArray, arr[left], arr[right]);
            if ((arr[left] + arr[right] + currentArray) == 0) {
                arrIndexList.push([arr[left], arr[right], currentArray]);
            }
        }
        left++;
        right--;
    }


    return arrIndexList;
}

const findtriplets = (arr) => {
    let found = true;
    let res = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    res.push([arr[i], arr[j], arr[k]]);
                    found = true;
                }
            }
        }
        if (found == false) {
            console.log("not found");
        }
    }
    return res;
}

const arr = [12, 3, 1, 2, -6, 5, -8, 6];
console.log(findtriplets(arr));