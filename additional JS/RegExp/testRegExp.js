// new RegExp ("pattern", "flags")
// pattern /pattern/f


/* const test = "Hello World";
const test1 = "Around";
const test2 = "WORLD";

const reg = /l/;
const regF = /l/ig; 

console.log(test.search(reg));			// => 2 index
console.log(test1.search(reg));			// => -1 no  found
console.log(test2.search(regF));		// => 3
// match
console.log(test.match(regF));			// => [ 'l', 'l', 'l' ]

const passWord = "oierhiergoerg";
console.log(passWord.replace(/./g, "*")); // => ************* hidden all text

const Somedate = "12-25-31";
console.log(Somedate.replace(/-/g, ":"));// => 12:25:31 */

 

/* const ans = prompt("Enter your number: ");

const reg= /\d/g;

console.log(ans.match(reg)); */

const str = "My name is R2D2";

console.log(str.match(/\D/ig));			// => 
/* [ //   'M', 'y', ' ', 'n',
//   'a', 'm', 'e', ' ',
//   'i', 's', ' ', 'R',
//   'D'
// ] */ 

console.log(str.match(/\w\d\w\d/i));


// \D not numbers
// \W not string 


  let req = /\d\S/ig;
  // let reqMinus = /-/g;
  // let reqPlus = /+/g;
  let string = "    -234243eigr";

  let test = string.match(req).join("");
  test.replace(/-/g, "-");
  console.log(test);

//console.log("".match(req));