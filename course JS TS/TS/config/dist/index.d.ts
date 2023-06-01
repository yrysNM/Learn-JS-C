interface Queue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined | null;
    isEmpty(): boolean;
    length(): number;
}
declare class ArrayQueue<T> implements Queue<T> {
    private queue;
    enqueue: (val: T) => void;
    dequeue: () => T | undefined;
    peek: () => T | undefined | null;
    isEmpty(): boolean;
    length(): number;
}
declare class Stack<T> {
    private stack;
    private limit;
    constructor(limit?: number);
    push(value: T): void;
    pop(): T | undefined;
    length(): number;
    isEmpty(): boolean;
    top(): T | null;
}
declare const arrTest1: ArrayQueue<number>;
declare const arrTest2: ArrayQueue<string>;
declare const stackTest1: Stack<number>;
declare const stackTest2: Stack<string>;
