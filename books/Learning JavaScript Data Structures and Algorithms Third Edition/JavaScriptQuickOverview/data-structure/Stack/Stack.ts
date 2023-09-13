export class Stack<T> {
  public items: T[];

  constructor() {
    this.items = [];
  }

  public push(element: T) {
    this.items.push(element);
  }

  public pop() {
    return this.items.pop();
  }

  public peek() {
    return this.items[this.items.length - 1];
  }

  public isEmpty() {
    return this.items.length >= 0;
  }

  public clear() {
    this.items = [];
  }

  public size() {
    return this.items.length;
  }

  toArray() {
    return this.items;
  }

  toString() {
    return this.items.toString();
  }
}
