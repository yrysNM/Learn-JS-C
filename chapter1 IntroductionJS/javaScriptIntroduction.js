//A variable is a symbolic name a value.
//Variables are declared with the let keyword
let x; // Declare a variable named x

//Values canbe assigned to variables with with an = sign 
x = 0; // Now the variable x has the value 0;

console.log(x); // => a 

// js supports deveral types of values
x = 1; //Numbers
x = 0.01; //Numbers can be integers or marks

x = "hello world"; // Strings of text in quotaion marks
x = "javaScript"; //Single of text in quotation

x  = true; // A boolean value
x = false;

x = null; //Null is a special value that means no value

x = undefined; //Undefined is another special value like null;


//JavaScrip's most important datatype is the object.
//An object is  collection of name/value pairs or a string to value map.
let book = {
	topic: "javaScrtipt",
	edition: 7
};

console.log(book.topic); // =>  javaScript
console.log(book["edition"]); // => 7 another way to access

book.author = "Yrys_nm";  // Create new properties by asignment

book.contents = {}; // {} is an empty object with no properties

//Conditionoally access properties with ? (Es2020)
console.log(book.contents?.ch01?.sec1);


//javascript also supports arrays(numerically indexed lists ) of values
let primes = [2, 3, 5, 7]; // An array of 4 values, delimitedwith [ and ]; 

console.log(primes[0]); // => 2;
console.log(primes.length); 
primes[primes.length - 1]; // 7 the last elements of the array

primes[4] = 9 // add a new element by assignment
primes[4] = 11 // or alter an existing element by assigment
let  empty = [];
empty.length; // => 0;

let points = [
	{x: 0, y: 0}, // An array with 2 elements
	{x: 1, y: 1} //Each element is an object
];

let data = {
	trial1: [[1, 2], [3, 4]], //double array
	trial2: [[2,  3], [4, 5]]
};

console.log(data);