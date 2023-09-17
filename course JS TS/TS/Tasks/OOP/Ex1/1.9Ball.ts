export class Ball {
    private _x: number = 0;
    private _y: number = 0;
    private _radius: number = 0;
    private _xDelta: number = 0;
    private _yDelta: number = 0;


    constructor(x: number, y: number, radius: number, xDelta: number, yDelta: number) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._xDelta = xDelta;
        this._yDelta = yDelta;
    }

    public getX(): number {
        return this._x;
    }

    public setX(value: number): void {
        this._x = value;
    }

    public getY(): number {
        return this._y;
    }

    public setY(value: number) {
        this._y = value;
    }

    public getRadius(): number {
        return this._radius
    }

    public setRadius(value: number): void {
        this._radius = value;
    }

    public getXDelta(): number {
        return this._xDelta;
    }

    public setXDelta(value: number): void {
        this._xDelta = value;
    }

    public getYDelta(): number {
        return this._yDelta;
    }

    public setYDelta(value: number): void {
        this._yDelta = value;
    }

    public move() {
        this._x += this._xDelta;
        this._y += this._yDelta;

    }

    public reflectHorizontal() {
        this._xDelta *= -1;
    }

    public reflectVertical() {
        this._yDelta *= -1;
    }

    public toString(): string {
        return `Ball[(${this._x}, ${this._y}), speed=(${this._xDelta},${this._yDelta})]`;
    }
}