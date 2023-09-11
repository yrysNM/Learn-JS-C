export class Account {
  private _id: string;
  private _name: string;
  private _balance: number = 0;

  //   constructor(id: string, name: string);
  constructor(id: string, name: string, balance?: number) {
    this._id = id;
    this._name = name;

    if (balance) {
      this._balance = balance;
    }
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get balance() {
    return this._balance;
  }

  public credit(amount: number) {
    this._balance += amount;
    return this.balance;
  }

  public debit(amount: number): number {
    if (amount <= this._balance) {
      this._balance -= amount;
      return this.balance;
    } else {
      console.log(`Amout exceeded balance`);
      return this.balance;
    }
  }

  public transferTo(another: Account, amount: number): number {
    if (amount <= this._balance) {
      this._balance -= amount;
      another._balance = amount;
      return another.balance;
    } else {
      console.log("Amount exceeded balance");
      return this.balance;
    }
  }
}
