// import { a } from "./test/test";

interface Queue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined | null;
  isEmpty(): boolean;
  length(): number;
}
/**/ / @internal */;
class ArrayQueue<T> implements Queue<T> {
  private queue: T[] = [];

  enqueue = (val: T): void => {
    this.queue.push(val);
  };

  dequeue = (): T | undefined => {
    return this.queue.shift();
  };

  peek = (): T | undefined | null => {
    return this.queue[0];
  };

  isEmpty(): boolean {
    return this.queue.length === 0;
  }
  length(): number {
    return this.queue.length;
  }
}

class Stack<T> {
  private stack: T[] = [];
  private limit: number;

  constructor(limit: number = Number.MAX_VALUE) {
    this.limit = limit;
  }

  push(value: T) {
    if (this.length() + 1 > this.limit) {
      throw new Error("Limit stact error");
    } else {
      this.stack.push(value);
    }
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Empty stack error");
    } else {
      return this.stack.pop();
    }
  }

  length() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  top(): T | null {
    return this.stack[this.length() - 1];
  }
}

// Для тестов
console.log(`------------Queue------------`);

const arrTest1 = new ArrayQueue<number>();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());

const arrTest2 = new ArrayQueue<string>();
arrTest2.enqueue("5");
arrTest2.enqueue("10");
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());

console.log(`------------Stack------------`);
const stackTest1 = new Stack<number>(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());

const stackTest2 = new Stack<string>(10);
stackTest2.push("20");
stackTest2.push("50");
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());
