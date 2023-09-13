interface Array<T> {
  insertFirstPosition(value: number): void;
  reIndex(myArray: number[]): Array<T>;
  removeFirstPosition(): Array<T>;
}

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

Array.prototype.reIndex = function (myArray) {
  const newArray: number[] = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      console.log(myArray[i]);
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.insertFirstPosition(-1);

numbers = numbers.removeFirstPosition();

console.log(numbers);
