const trap = function (height) {
    const valueMaxIndex = maxValueIndex(height);
    let leftIndex = 0;
    let left = -1, right = -1;
    let rightIndex = height.length - 1;
    let res = 0;
    while (leftIndex <= rightIndex) {
        left = height[leftIndex] > left ? height[leftIndex] : left;
        right = height[rightIndex] > right ? height[rightIndex] : right;

        if (left > right) {
            res += right - height[rightIndex];
            rightIndex--;
        } else {
            res += left - height[leftIndex];
            leftIndex++;
        }
    }

    console.log(res);

}

const maxValueIndex = (arr) => {
    let maxV = arr[0];
    let indexMaxValue = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxV) {
            maxV = arr[i];
            indexMaxValue = i;
        }
    }

    return indexMaxValue;
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height2 = [4, 2, 0, 3, 2, 5]
trap(height);
trap(height2);