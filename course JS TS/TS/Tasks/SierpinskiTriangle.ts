/**
 * @TODO finish algorithm
 * @param n row of triangle
 */
function printSierpinki(n: number) {
  const strArr: string[] = [];

  for (let y = n - 1; y >= 0; y--) {
    for (let i = 0; i < y; i++) {
      console.log(" ");
      strArr.push(" ");
    }

    for (let x = 0; x + y < n; x++) {
      if ((x & y) !== 0) {
        console.log("   ");
        strArr.push("   ");
      } else {
        console.log("*  ");
        strArr.push("*  ");
      }
    }
    console.log("\n");
  }
}

// printSierpinki(16);

const testArr: number[] = [4, 12, -13, 234, 35];
for (let i = 0; i < testArr.length; i++) {
  //   let k = testArr[i];
  for (let j = i + 1; j < testArr.length; j++) {
    if (testArr[i] > testArr[j]) {
      let swap = testArr[j];
      testArr[j] = testArr[i];
      testArr[i] = swap;
    }
  }
}

// testArr.sort((a, b) => a - b);
console.log(testArr);
