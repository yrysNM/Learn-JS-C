//1) Adding a property to an object
let emptyJSObj = {};
emptyJSObj["exampleKey"] = "exmapleValue";
emptyJSObj.exampleKey2 = "exmapleValue2";
//console.log(emptyJSObj); 							// =.{ exampleKey: 'exmapleValue', exampleKey2: 'exmapleValue2' }



//2) Defining classes
//new EC8~9 
class Animal {
	constructor(name, animal) {
		this.name = name; 
		this.animal = animal;
	}

	sayName() {
		console.log(this.name);
	}

	animalType() {
		console.log(this.animal);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name, "Dog");
	}


}

let dog = new Dog("Akjurek");
dog.sayName();
dog.animalType();

let dreamAnimal= new Animal("RedDragon", "Dragon");
dreamAnimal.sayName();
dreamAnimal.animalType();



//with object(function) in bottom
function AnimalO(name, animalType) {
	this.name = name;
	this.animalType = animalType;
}
AnimalO.prototype.sayName = function() {
	console.log(this.name);
}
AnimalO.prototype.sayAnimalType = function() {
	console.log(this.animalType);	
}

function DogO(name){
	AnimalO.call(this, name, "Dog");
}
//copy over the methods
DogO.prototype = Object.create(AnimalO.prototype);
let myAnimal = new AnimalO("ditto", "pokemon");
// myAnimal.sayName();									// => ditto 
// myAnimal.sayAnimalType();							// => pokemon

let myDog = new DogO("candy", "dog");
// myDog.sayName();		      // "candy"
// myDog.sayAnimalType(); 	  // "dog"