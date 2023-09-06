export class Circle {
  private radius: number = 1.0;
  private color: string = "red";

  constructor(r: number = 1.0) {
    this.radius = r;
  }

  public getRadius(): number {
    return this.radius;
  }

  public getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
