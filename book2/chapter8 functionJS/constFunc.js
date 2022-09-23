// This function returns a function that always returns v
function constfunc(v) { return () => v; }

// Create an array ofconstant functions: 
let funcs = [];
for(var i = 0; i < 10; i++) funcs[i] = constfunc(i);

// The function at array element 5 returns the value 5.
console.log(funcs[5]());  // => 5