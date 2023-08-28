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
