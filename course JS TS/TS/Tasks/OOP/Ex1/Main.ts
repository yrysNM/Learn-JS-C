import { Circle } from "./1.1Circle";

function main() {
  const c1 = new Circle();

  console.log(
    `The circle has radius of ${c1.getRadius()} and area of ${c1.getArea()}`
  );

  const c2 = new Circle(2);
  console.log(
    `The circle has radius of ${c2.getRadius()} and area of ${c2.getArea()}`
  );
}

main();
