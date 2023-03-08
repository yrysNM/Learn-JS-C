
//Implicit Types 
let helloWorld = "hello world";


//explict types
let firstName: string = "John";
let age: number = 30;

//type error
// firstName = 5;
// age = "eigerg";

//typele
type stringAndnumber = [String, Number];

let x: stringAndnumber = ["gerg", 24];
// console.log(x);


//enum
enum Continentes {
    North_America,
    South_Americe,
    Africa,
    Asia,
    Europe,
}

//usage 
var region = Continentes.Africa; // 2
// console.log(region, Continentes);

//interface 
interface User {
    name: string;
    id: number;
}

const user: User = { name: "John", id: 0 };


// composing types => Union
type WindowStates = "open" | "close" | "minimized";
type LockStates = "Locked" | "Unlocked";
type oddNumberUndexTen = 1 | 3 | 5 | 7 | 9;

const odd: oddNumberUndexTen = 5;
// console.log(odd); //=> 5

const getLength = (param: string | string[]) => {
    return param.length;
}

console.log(getLength("test")); // => 4
console.log(getLength(["test", "test1"])); // => 2
