const Stack = require("../../Stacks_&_Queues/Stack/Stack");

const factorial = (n) => {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const fact = (n) => {
    let s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    let product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

console.log(factorial(5));  // => 120
console.log(fact(5));       // => 120
