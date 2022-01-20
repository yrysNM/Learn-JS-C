let a = ["world"]; // Start with a one-element array
let value = a[0]; // Read element 0
a[1] = 3.14; // Write element 1
let i = 2;
a[i] = 3; // write element 2
a[i + 1] = "hello"; // write elment 3
a[a[i]] = a[0]; // Read elements 0 and 2, write element 3

console.log(a);