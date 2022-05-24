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

function BitWiseSubtract(a,b) {
    return BitWiseAdd(a, BitWiseNegate(b));
}

function BitWiseDividePositive(a, b) {
    let c = 0; 

    if(b != 0) {
        while(a >= b) {
            a = BitWiseSubtract(a, b); 
            c++;
        }
    }

    return c;
}

console.log(BitWiseDividePositive(12, 2));      // 5

function BitWiseDivide(a, b) {
    let c = 0,
        isNegative = 0;
    
    if(a < 0) {
        a  = BitWiseNegate(a);                  // convert to positive
        isNegative = !isNegative; 
    }

    if(b < 0) {
        b = BitWiseNegate(b);                   // convert to positve
        isNegative = !isNegative; 

    }

    if(b != 0) {
        while(a >= b) {
            a = BitWiseSubtract(a, b); 
            c++;
        }    
    }

    if(isNegative) {
        c = BitWiseNegate(c);
    }

    return c;
}


console.log(BitWiseDivide(-12, 2));