//Time Complexity: O(n)
function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }

  // check from 2 to n - 1
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

//Time Complexity: O(sqrt(n))
function isPrimeBetter(n: number) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  // This is checked so that we can skip
  // middle five number in below loop
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i + i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

function primeFactorization(n: number) {
  // Print the number of 2s that divide n
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }

  // n must be add at this point. So we can skip one element
  // (note i = i + 2)
  for (let i = 3; i * i <= n; i = i + 2) {
    // whilte i divides n, print i and divide n
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
  }

  // This condition is to handle the case when n is a prime number
  // grater than 2
  if (n > 2) {
    console.log(n);
  } //Time Complexity: O(sqrt(n))
}

console.log(primeFactorization(234234));

/**
 * @EXERCISES
 */

/**
 * 1) Base: 4, Exponent: 3, Modulus: 5
    4ˆ3 % 5 = 64 % 5 = 4
    value = (lastValue x base ) % modulus:
    value = (1 x 4) % 5 = 4 % 5 = 4
    value = (4 x 4) % 5 = 16 % 5 = 1
    value = (1 x 4) % 5 = 4 % 5 = 4
 */

function modularExponentiation(
  base: number,
  exponent: number,
  modulus: number
): string {
  if (modulus == 1) return `task 1) ${0}`;

  let value = 1;

  for (let i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }

  return `task 1) ${value}`; // O(n)
}

console.log("-----------Exercises-------------");
console.log(modularExponentiation(4, 2, 5));

/**
 * 2) print all primies less then n
 */

function allPrimesLessThenN(n: number): void {
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      console.log(`task 2) ${i}`); //O(nsqrt(n))
    }
  }
}

allPrimesLessThenN(15);

/**
 * 3) check for a set of prime factors
 */

function maxDivide(number: number, divisor: number): number {
  while (number % divisor === 0) {
    number /= divisor;
  }

  return number; //
}

function isUgly(number: number): boolean {
  number = maxDivide(number, 2);
  number = maxDivide(number, 3);
  number = maxDivide(number, 5);

  return number === 1; // O(log2(n))
}

function arrayNUglyNumbers(n: number): string {
  let counter = 0,
    currentNumber = 1,
    uglyNumbers: number[] = [];

  while (counter != n) {
    if (isUgly(currentNumber)) {
      counter++;
      uglyNumbers.push(currentNumber);
    }
    currentNumber++;
  }

  return `task 3) ${uglyNumbers}`; //O(n(log2(n)))
}

console.log(arrayNUglyNumbers(10));
