//Implicit Types 
var helloWorld = "hello world";
//explict types
var firstName = "John";
var age = 30;
var x = ["gerg", 24];
// console.log(x);
//enum
var Continentes;
(function (Continentes) {
    Continentes[Continentes["North_America"] = 0] = "North_America";
    Continentes[Continentes["South_Americe"] = 1] = "South_Americe";
    Continentes[Continentes["Africa"] = 2] = "Africa";
    Continentes[Continentes["Asia"] = 3] = "Asia";
    Continentes[Continentes["Europe"] = 4] = "Europe";
})(Continentes || (Continentes = {}));
//usage 
var region = Continentes.Africa; // 2
var user = { name: "John", id: 0 };
var odd = 5;
// console.log(odd); //=> 5
var getLength = function (param) {
    return param.length;
};
console.log(getLength("test")); // => 4
console.log(getLength(["test", "test1"])); // => 2
