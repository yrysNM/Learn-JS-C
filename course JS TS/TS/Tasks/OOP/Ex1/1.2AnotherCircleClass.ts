export class Circle2 {
  private _radius: number;
  constructor(radius: number = 1.0) {
    this._radius = radius;
  }

  public get radius(): number {
    return this._radius;
  }
  public set radius(radius: number) {
    this._radius = radius;
  }

  public getArea(): number {
    return Math.PI * this._radius ** 2;
  }

  public getCircumference(): number {
    return 2 * Math.PI * this._radius;
  }

  public toString(): string {
    return `Circle (${this._radius})`;
  }
}
