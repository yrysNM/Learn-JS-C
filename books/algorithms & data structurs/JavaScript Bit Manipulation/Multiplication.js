function BitWiseNegate(a) {
    return BitWiseAdd(~a, 1);
}

function BitWiseAdd(a, b) {
    while(b != 0) {
        let carry = (a & b);
        a = a ^ b;
        b = carry << 1; 
    }

    return a;
}

function BitWiseMultiply(a, b) {
    let m = 1, 
        c = 0;

    if(a < 0) {
        a = BitWiseNegate(a);
        b = BitWiseNegate(b);
    }

    while(a >= m  && b) {
        if(a & m) {
             c = BitWiseAdd(b, c);
            } 
        b = b << 1; 
        m = m << 1; 
    }
    return c;
}

console.log(BitWiseMultiply(3, 3));     // => 9