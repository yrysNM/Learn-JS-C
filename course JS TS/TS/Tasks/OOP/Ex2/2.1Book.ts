import { Author } from "./2.1Author";

export class Book {
  private _name: string;
  private _author: Author;
  private _price: number;
  private _qty: number = 0;

  constructor(name: string, author: Author, price: number, qty?: number) {
    this._name = name;
    this._author = author;
    this._price = price;

    if (typeof qty === "number") {
      this._qty = qty;
    }
  }

  public getName() {
    return this._name;
  }

  public getAuthor(): Author {
    return this._author;
  }

  public getPrice() {
    return this._price;
  }

  public setPrice(value: number) {
    this._price = value;
  }

  public getQty(): number {
    return this._qty;
  }

  public setQty(value: number) {
    this._qty = value;
  }

  public toString(): string {
    return `Book[name=${this._name},Author=${this._author.toString()}],price=${
      this._price
    },qty=${this._qty}`;
  }
}
