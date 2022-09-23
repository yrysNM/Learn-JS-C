let book = {
	"main title": "JavaScript", //These property names includes spaces
	"sub-title": "The Definitive Guide", // and hyphenes so use string literals.
	for: "all audiences",   //for is  reserved but no quotes
	author: { //The value of this property  is
		firstname: "David",
		surname: "Flanagan"
	}

};

//A verbose and explicit technique
let surname = undefined;
if(book) {
	if(book.author) {
		surname = book.author.surname;
	}
}

//A concise and indiomatic alternative to get surname or null or undefined

//surname = book && book.author && book.author.surname;
let ci = book?.author?.firstname;
console.log(surname); //=> flanagan
console.log(ci); // => david