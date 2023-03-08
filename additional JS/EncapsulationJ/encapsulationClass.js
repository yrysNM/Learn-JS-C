class User {
	constructor(name, age) {
		this.name = name; 
		this._age = age;
	}

	//# private in new ecscript
	#surname = "Piter";

	say () {
		console.log(`Name: ${this.name} ${this.#surname} Age: ${this._age}`);
	}

	get age(){
		return this._age;
	}

	set  age(age) {
		if(typeof age === 'number' && age > 0 && age < 120) {

			this._age = age;
		}else {
			console.log("Wrong answer");
		}

	}
}


const ivan = new User("Ivan", 29); 
console. log(ivan.age);
ivan.age = 99; 

console.log(ivan.surname);
ivan.say();
