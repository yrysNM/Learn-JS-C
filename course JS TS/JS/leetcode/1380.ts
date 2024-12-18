/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix: number[][]): number[] {
  let maxColIndex = 0;
  for (let i = 0; i < matrix.length; i++) {
    let maxValue = matrix[0][0];
    for (let j = 0; j < matrix[i].length; j++) {
      if (maxValue < matrix[i][j]) {
        maxValue = matrix[i][j];
        maxColIndex = i;
      }
    }
  }

  const minValueIndex = matrix[maxColIndex].indexOf(
    Math.min(...matrix[maxColIndex])
  );
  const maxCol = matrix[maxColIndex][minValueIndex];
  const res = matrix.every((row) => {
    return row[minValueIndex] <= maxCol;
  });

  console.log(res, maxCol);

  return res ? [maxCol] : [];
};

luckyNumbers([
  [3, 6],
  [4, 1],
  [5, 2],
  [7, 8],
]);
luckyNumbers([
  [3, 6],
  [7, 1],
  [5, 2],
  [4, 8],
]);

luckyNumbers([
  [7, 8],
  [1, 2],
]);

luckyNumbers([
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
]);

luckyNumbers([[21799], [64145], [88382], [60483]]);
