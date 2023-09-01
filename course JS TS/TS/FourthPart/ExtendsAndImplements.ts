class Animal {
  public name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

interface Pet {
  breed: string;
  play: () => void;
}

class Dog extends Animal implements Pet {
  public breed: string = "";

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  play() {
    console.log(`${this.name} plays fetch.`);
  }

  bark() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Fido", "Golden Retriever");
dog.speak();
dog.play();
dog.bark();

/**
 * use cases for 'extends'
 */
class Shape {
  constructor(public color: string) {}

  draw() {
    console.log(`Drawing a ${this.color} shape`);
  }
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const circle = new Circle(5, "blue");
circle.draw(); // output: 'drawing a blue shape'
console.log(`The area of the curcle is ${circle.area()}`);

/**
 * use cases for 'implments'
 */

interface Employee {
  name: string;
  id: number;
  salary: number;
  calculateBonus: () => number;
}

class Develop implements Employee {
  constructor(public name: string, public id: number, public salary: number) {}

  calculateBonus() {
    return this.salary * 0.1;
  }
}

class Manager implements Employee {
  constructor(
    public name: string,
    public id: number,
    public salary: number,
    public teamSize: number
  ) {}

  calculateBonus() {
    return this.salary * 0.2;
  }
}

const developer = new Develop("John Doe", 1, 50000);
const manager = new Manager("Jane Smith", 2, 750000, 5);

console.log(`${developer.name}'s bonus is $${developer.calculateBonus()}.`); // Output: "John Doe's bonus is $5000."
console.log(`${manager.name}'s bonus is $${manager.calculateBonus()}.`); // Output: "Jane Smith's bonus is $15000."
