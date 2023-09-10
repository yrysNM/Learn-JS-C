export class Rectangle {
  private _length: number;
  private _width: number;

  constructor(length: number = 1.0, width: number = 1.0) {
    this._length = length;
    this._width = width;
  }

  public get getLength(): number {
    return this._length;
  }

  public set setLength(length: number) {
    this._length = length;
  }

  public get getWidth(): number {
    return this._width;
  }

  public set setWidth(width: number) {
    this._width = width;
  }

  public getArea(): number {
    return this._length * this._width;
  }

  public getDiogonal(): number {
    return Math.sqrt(this._length ** 2 + this._width ** 2);
  }

  public getRotation(): number {
    return this.getArea() * 2 / this.getDiogonal() ** 2;
  } 

  public getPerimeter(): number {
    return (this._length + this._width) * 2;
  }

  public toString(): string {
    return `Rectangle (length=${this._length}, width=${this._width})`;
  }
}
