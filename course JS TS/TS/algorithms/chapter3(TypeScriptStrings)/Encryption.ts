import { isPrime } from "../chapter2(TypeScriptNumbers)/NumberAlgorithms";

/**
 * @RSA Encryption
 */
function modInverse(e: number, phi: number): number {
  let m0 = phi, t, q;
  let x0 = 0, x1 = 1;

  if (phi == 1) {
    return 0;
  }

  while (e > 1) {
    // q is quotient
    q = Math.floor(e / phi);
    t = phi;

    // pgi is remainder now, process same as
    // Euclid's algo
    (phi = e % phi), (e = t);

    t = x0;

    x0 = x1 - q * x0;

    x1 = t;
  }

  // make x1 positive
  if (x1 < 0) {
    x1 += m0;
  }

  return x1;
}

/* console.log(modInverse(7, 40)); -> 23 */


function RSAKryPair(p: number, q: number): undefined | number[][] {
    // need to check thaat theu are primes
    if(!(isPrime(p) && isPrime(q))) {
        return;
    }

    // need tocheck that they're not the same
    if(p === q) {
        return;
    }

    let n = p * q, 
        phi = (p - 1) * (q - 1),
        e = 3, 
        d = modInverse(e, phi);

    // Public key: [e, n], Private key: [d, n]
    return [[e, n], [d, n]];
}

console.log("------------------------------------");

console.log(`String Encryption rsa) ${RSAKryPair(5, 11)?.map(item => `[${item}]`)}`
);
