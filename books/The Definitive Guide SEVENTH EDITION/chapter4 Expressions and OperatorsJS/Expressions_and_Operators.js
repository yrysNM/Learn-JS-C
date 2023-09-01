let a; // Ooops we forget to initialize this variable
let  index = 0; 

try  {
	a[index++]; // Throws  TypeError

}catch(e) {
	console.log(index); // => 1 increment occurs before TypeError is thrown

}

console.log(a?.[index++]); // => Undefined: becouse a is undefined
console.log(index); // => 1: not incremented because ?.[] short
console.log(a[index++]); //!Type Error can;t  index  undefined