const array2D = <T>(rows: number, columns: number): T[][] => {
  const jaggedArray: T[][] = new Array(rows);

  for (let i = 0; i < columns; i++) {
    jaggedArray[i] = new Array(rows);
  }

  return jaggedArray;
};

// declare global {
interface Array<T> {
  snail(rowsCount: number, colsCount: number): number[][];
}
// }

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number
): number[][] {
  if (this.length !== rowsCount * colsCount) return [];

  const matrixAr: number[][] = array2D(rowsCount, colsCount);
  for (let i = 0; i < this.length; i++) {
    const j = Math.floor(i / rowsCount);
    if (i % 2 === 0) {
      matrixAr[j % rowsCount][i] = this[j];
    } else {
      matrixAr[rowsCount - (j % rowsCount) - 1][i] = this[j];
    }
  }

  return matrixAr;
};

const arr = [1, 2, 3, 4];
console.log(
  arr.snail(1, 4) // [[1,2,3,4]]
);
