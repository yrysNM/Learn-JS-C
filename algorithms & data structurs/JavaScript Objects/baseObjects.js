

let javaScriptObject = {};
let testArray = [1, 2, 3,4];

javaScriptObject.array = testArray;
//console.log(javaScriptObject);				// => { array: [ 1, 2, 3, 4 ] }

javaScriptObject.title = "Algorithms";
//console.log(javaScriptObject);				// => { array: [ 1, 2, 3, 4 ], title: 'Algorithms' }


//prototypal inheritance
function ExampleClass(){
	this.name = "javaScript";
	this.sayName = function() {
		console.log(this.name);
	}
}

//new object
let example1  = new ExampleClass(); 
//example1.sayName(); 							// => javaScript

//exmaple  of using .prototype
function  ExampleClass1() {
	this.array = [1,2 , 3, 4, 5];
	this.name = "JavaScript";

}

//new object
let example2 = new ExampleClass1();

ExampleClass1.prototype.sayName = function (){
	console.log(this.name);
}

//example2.sayName();							// => JavaScript


//constructor and variables
function ExampleClass2(name, size) {
	this.name = name;
	this.size = size;
}

let example3 = new ExampleClass2("Public", 5);
//console.log(example3);						// => ExampleClass2 { name: 'Public', size: 5 }

//accessing public variables
//console.log(example3.name);					// => "Public"
//console.log(example3.size);					// => 5


//getter and setter 
function ExmapleClass3(name, size) {
	let privateName = name; 
	let privateSize = size;

	this.getName = function() {
		return privateName;
	}
	
	this.setName = function(name) {
		privateName = name;
	}

	this.getSize = function() {
		return privateSize;
	}

	this.setSize = function(size) {
		privateSize = size;
	}
} 

let example4 = new ExmapleClass3("Sammie", 3);
example4.setSize(12);
console.log(example4.privateName);				// => undefined
console.log(example4.getName());				// => Sammie
console.log(example4.size);						// => undefined
console.log(example4.getSize());				// => 3