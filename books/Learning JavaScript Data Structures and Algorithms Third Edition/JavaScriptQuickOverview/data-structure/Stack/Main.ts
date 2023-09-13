import { Stack } from "./Stack";

function main() {
  const stack = new Stack();
  console.log(stack.isEmpty());

  stack.push(5);
  stack.push(8);

  console.log(stack.peek());
}
