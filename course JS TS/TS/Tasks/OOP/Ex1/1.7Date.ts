export class DateClass {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    this._day = day;
    this._month = month;
    this._year = year;
  }

  public get day() {
    return this._day;
  }

  public get month() {
    return this._month;
  }

  public get year() {
    return this._year;
  }

  public set day(day: number) {
    this._day = day;
  }

  public set month(month: number) {
    this._month = month;
  }

  public set year(year: number) {
    this._year = year;
  }

  public setDate(day: number, month: number, year: number) {
    this._day = day;
    this._month = month;
    this._year = year;
  }

  public toString(): string {
    function initialDate(date: number): string {
      if (date < 10) {
        return `0${date}`;
      } else {
        return date.toString();
      }
    }

    let dayDate = initialDate(this._day);
    let monthDate = initialDate(this._month);
    let yearDate = initialDate(this._year);

    return `${dayDate}/${monthDate}/${yearDate}`;
  }
}
