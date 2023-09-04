class Person {
  _name = "";

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

let lotrChart = new Person("Frodo");
console.log(lotrChart.name);
lotrChart.name = "Gandalf";
console.log(lotrChart.name);
lotrChart._name = "Sam";
console.log(lotrChart.name);
