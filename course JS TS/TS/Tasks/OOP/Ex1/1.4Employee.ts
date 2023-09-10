export class Employee {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _salary: number;

  constructor(id: number, firstName: string, lastName: string, salary: number) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._salary = salary;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(value: number) {
    this._salary = value;
  }

  public get getName(): string {
    return `${this.firstName} ${this._lastName}`;
  }

  public get getAnnualSalary(): number {
    return this._salary * 12;
  }

  /**
   * 
   * @param precent
   * @returns
   */
  public raiseSalary(precent: number): number {
     this._salary = ((this._salary * (precent / 100)) + this._salary) | 0;
     return this._salary;
    }

  public toString() {
    return `Employee(id=${this._id},name=${this.firstName},${this.lastName},salary=${this._salary})`;
  }
}
