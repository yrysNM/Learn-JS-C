function exampleLinear(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function exampleQuedratic(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log(i);

    for (let j = 0; j < n; j++) {
      console.log(j);
    }
  }
}

function exampleCubic(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log(i);

    for (let j = i; j < n; j++) {
      console.log(j);

      for (let k = j; k < n; k++) {
        console.log(k);
      }
    }
  }
}

function exampleLogorithmic(n: number): void {
  for (let i = 2; i <= n; i = i * 2) {
    console.log(i);
  }
}

exampleLogorithmic(10);

/**
 *  @NOTIFICATION  { Coefficient Rule: “Get Rid of Constants” }
 */

// O(n)
function a(n: number): number {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }

  return count;
}

//O(5n)
function a1(n: number): number {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }

  return count;
}

/**
 * @NOTIFICATION {Sum Rule: “Add Big-Os Up”}
 * If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n)).
 */

// O(h(n)+p(5n)) -> O(n)
function a2(n: number): number {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }

  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }

  return count;
}

/**
 * @NOTIFICATION {Product Rule: “Multiply Big-Os”}
 * If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n)).
 */

// O(f(5n*n)) => O(n^2)
function a3(n: number): number {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
    for (let i = 0; i < 5 * n; i++) {
      count += 1;
    }
  }
  return count;
}

/**
 * @NOTIFICATION {Polynomial Rule: “Big-O to the Power of k”}
 * If f(n) is a polynomial of degree k, then f(n) is O(nk).
 */

function a4(n: number): number {
  let count = 0;
  for (let i = 0; i < n * n; i++) {
    count += 1;
  }

  return count;
}
