import { Circle } from "./1.1Circle";
import { Circle2 } from "./1.2AnotherCircleClass";
import { Rectangle } from "./1.3Rectangle";
import { Employee } from "./1.4Employee";
import { InvoiceItem } from "./1.5InvoiceItem";
import { Account } from "./1.6Account";
import { DateClass } from "./1.7Date";
import { Time } from "./1.8Time";

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
  console.log("rotation is:", r1.getRotation());

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

  console.log("------------------Invoice--------------------------");
  const inv1 = new InvoiceItem("A101", "Pen Red", 888, 0.08);
  console.log(inv1);

  inv1.qty = 999;
  inv1.unitPrice = 0.99;
  console.log(inv1);

  console.log("id is: " + inv1.id);
  console.log("desc is: " + inv1.desc);
  console.log("qty is: " + inv1.qty);
  console.log("unitPrice is: " + inv1.unitPrice);

  console.log("total is: ", inv1.total);

  console.log("------------------Account--------------------------");

  const a1 = new Account("A101", "Tan Ah Teck", 88);
  console.log(a1);
  const a2 = new Account("A102", "Kumar");
  console.log(a2);

  console.log("ID: " + a1.id);
  console.log("Name: " + a1.name);
  console.log("Balance: " + a1.balance);

  a1.credit(100);
  console.log(a1);
  a1.debit(50);
  console.log(a1);
  a1.debit(500);
  console.log(a1);

  a1.transferTo(a2, 100);
  console.log(a1);
  console.log(a2);

  console.log("------------------Date--------------------------");
  const d1 = new DateClass(1, 2, 2014);
  console.log(d1.toString());
  d1.month = 12;
  d1.day = 9;
  d1.year = 2099;
  console.log(d1.toString());

  console.log("Month: " + d1.month);
  console.log("Day: " + d1.day);
  console.log("Year: " + d1.year);

  d1.setDate(3, 4, 2016);
  console.log(d1.toString());

  console.log("------------------Time--------------------------");
  const t1 = new Time(1, 2, 3);
  console.log(t1.toString());

  t1.hour = 4;
  t1.minute = 5;
  t1.secound = 6;

  console.log(t1.toString());

  console.log("Hour: " + t1.hour);
  console.log("Minute: " + t1.minute);
  console.log("Second: " + t1.secound);

  t1.setTime(23, 59, 58);
  console.log(t1.toString());

  console.log(t1.nextSecond().toString());
  console.log(t1.nextSecond().nextSecond().toString());

  console.log(t1.previousSecond().toString());
  console.log(t1.previousSecond().previousSecond().toString());
}

main();
