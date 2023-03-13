class UserG<T, S> {
  name: T;
  age: S;

  constructor(name: T, age: S) {
    this.name = name;
    this.age = age;
  }

  sayMyFullName<T>(surname: T): string {
    if (typeof surname !== "string") {
      return `I have only name: ${this.name}`;
    } else {
      return `${this.name} ${surname}`;
    }
  }
}

class AdminUser<T> extends UserG<string, number> {
  rules: T;
}

const ivan = new UserG("Ivan", 30);
console.log(ivan.sayMyFullName("Smith"));

const nameData = "Alex";
const ageData = 54;

const alex = new UserG<string, number>(nameData, ageData);
