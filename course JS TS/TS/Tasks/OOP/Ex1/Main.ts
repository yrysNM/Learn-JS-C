import { Circle } from "./1.1Circle";
import { Circle2 } from "./1.2AnotherCircleClass";
import { Rectangle } from "./1.3Rectangle";
import { Employee } from "./1.3Employee";

function main() {
  const c1 = new Circle();

  console.log(
    `The circle has radius of ${c1.getRadius()} and area of ${c1.getArea()}`
  );

  const c2 = new Circle(2);
  console.log(
    `The circle has radius of ${c2.getRadius()} and area of ${c2.getArea()}`
  );

  const c3 = new Circle2(1.1);
  console.log(c3); // toString
  const c4 = new Circle2();
  console.log(c4);

  console.log(`area is c3: ${c3.getArea()}`);
  console.log(`circumferencek is c3: ${c3.getCircumference()}`);

  console.log("-------------------Rectangle-------------------");
  const r1 = new Rectangle(1.2, 3.4);
  console.log(r1);
  const r2 = new Rectangle();
  console.log(r2);

  r1.setLength = 5.6;
  r1.setWidth = 7.6;
  console.log(r1);
  console.log(`length is r1: ${r1.getLength}`);
  console.log(`width is r1: ${r1.getWidth}`);

  console.log("area is: ", r1.getArea());
  console.log("perimeter is: ", r1.getPerimeter());
  console.log("diagonal is: ", r1.getDiogonal());
  console.log('rotation is:', r1.getRotation() );

  console.log("---------------------Employee-------------------");
  const e1 = new Employee(8, "Peter", "Tan", 2500);
  console.log(e1);

  e1.salary = 999;
  console.log(e1);

  console.log("id is: " + e1.id);
  console.log("firstname is: " + e1.firstName);
  console.log("lastname is: " + e1.lastName);
  console.log("salary is: " + e1.salary);

  console.log(`name is: `, e1.getName);
  console.log(`annual salary is: `, e1.getAnnualSalary);

  console.log(e1.raiseSalary(10));
  console.log(e1);
}

main();
