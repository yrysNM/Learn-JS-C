function BitWiseNegate(a) {
    return BitWiseAdd(~a, 1);
}

function BitWiseAdd(a,b) {
    while(b != 0) {
        let carry = (a & b); 
        a = a ^ b; 
        b = carry << 1; 
    }

    return a;
}

console.log(BitWiseNegate(9));                      // => -9
//negation with itself gives back original
console.log(BitWiseNegate(BitWiseNegate(9)));      // => 9

function BitWiseSubtract(a, b) {
    return BitWiseAdd(a, BitWiseNegate(b));
}

console.log(BitWiseSubtract(5, 5));                 // => 0 
console.log(BitWiseSubtract(5, 4));