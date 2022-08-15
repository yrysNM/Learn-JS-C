let a = []; // Start with an empty array 
// a[0]  = "Zero";
// a[1] = "one";  

a.push("zero"); // Add  value at the end a["zero"]
a.push("one", "two"); // add two more values. a  = ["zero", "one", "two"]
console.log(a);


delete a[0]; // delete  value

console.log("zero" in a); // => false 
console.log(a. length); // => 3: delete does not affect array length