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
