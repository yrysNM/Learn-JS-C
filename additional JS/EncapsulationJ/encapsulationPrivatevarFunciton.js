function User(name, age) {
	this.name = name; 
	let userAge = age; 


	this.say = function() {
		console.log(`Name: ${this.name}, age: ${userAge}`);
	};

	this.getAge = function() {
		return userAge;
	};

	this.setAge = function(age) {
		if(typeof age === 'number' && age > 0 && age < 120) {

			userAge = age;
		}else {
			console.log("Wrong answer");
		}

	};
}

const ivan = new User("Ivan", 27); 
console.log(ivan.name);
console.log(ivan.userAge);					// => undefined
console.log(ivan.getAge());					// => 27


ivan.setAge(30); 
ivan.setAge(300); 
console.log(ivan.getAge());

ivan.say();