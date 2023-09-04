// 1 argument of interface
interface Person {
  name: string;
  age: number;
}

function printName(person: Person) {
  console.log(person.name);
}

const john = { name: "John", age: 21 };
const mary = { name: "Mary", age: 21, phone: "123-45678" };
printName(john);
printName(mary);

// 2 argument OOP
interface Comparable {
  compareTO(b: MyObject): number;
}

class MyObject implements Comparable {
  age: number;

  compareTO(b: MyObject): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}
