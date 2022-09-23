let empty = {}; //An object with no properties
let point = {
	x: 0,
	y: 0
}; //Two numeric rpoperties

let p2 = {
	x: point.x,
	y: point.y + 1
}; //Mpre complex values

let book = {
	"main title": "JavaScript", //These property names includes spaces
	"sub-title": "The Definitive Guide", // and hyphenes so use string literals.
	for: "all audiences",   //for is  reserved but no quotes
	author: { //The value of this property  is
		firstname: "David",
		surname: "Flanagan"
	}

};

let author = book.author; // Get the "author " property of the book.
let name  = author.surname; //get  surname
let title = book["main title"];

book.edition  = 7; // Create an "edition" property of book
book["main title"] = "ECMAScript"; // Chang the  main title property

console.log(book.subtitle); // => undefined property doesn;t exist

let len = book.subtitle.length; // !TypeError undefined doesn't length


console.log(author + " " +  name + " " + title );
   
let o = new Object(); //Create an empty object: same as {}
let a = new Array(); //Create an empty array : same as [].
let d = new Date(); //Create a Date object representing the  current time
let r = new Map(); // Create  a Map object for key / value mapping