interface Square {
  side: number;
  area: number;
}

interface Rect {
  a: number;
  b: number;
  area: number;
}

// begin overload funtions
// aeguments can differend name
// main function and overload must be same
function calculateArea(side: number): Square;
function calculateArea(a: number, b: number, c: number, d: number): Rect;
function calculateArea(
  a: number,
  b?: number,
  c?: number,
  d?: number
): Square | Rect {
  if (b) {
    const rect: Rect = {
      a,
      b,
      area: a * b,
    };

    return rect;
  } else {
    const square: Square = {
      side: a,
      area: a * a,
    };

    return square;
  }
}

console.log(calculateArea(3));
console.log(calculateArea(3, 2, 5, 1));
