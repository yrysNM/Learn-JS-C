function maxWater(arr) {
    let left = 0;
    let right = arr.length - 1;
    let areaList = [];
    while (left < right) {
        if (arr[left] < arr[right]) {
            areaList.push(arr[left] * (right - left));
            left++;
        } else {
            areaList.push(arr[right] * (right - left));
            right--;
        }
    }
    return Math.max(...areaList);

}

const arr = [2, 5, 6, 7];
console.log(maxWater(arr));