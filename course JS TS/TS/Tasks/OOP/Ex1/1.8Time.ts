export class Time {
  private _hour: number;
  private _minute: number;
  private _second: number;
  private _date: Date;

  constructor(hour: number, minute: number, second: number) {
    this._hour = hour;
    this._minute = minute;
    this._second = second;
    this._date = new Date(new Date().setHours(hour, minute, second));
  }

  public get hour() {
    return this._hour;
  }

  public get minute() {
    return this._minute;
  }

  public get secound() {
    return this._second;
  }

  public set hour(hour: number) {
    this._hour = hour;
    this._date.setHours(hour);
  }

  public set minute(minute: number) {
    this._minute = minute;
    this._date.setMinutes(minute);
  }

  public set secound(second: number) {
    this._second = second;
    this._date.setSeconds(second);
  }

  public setTime(hour: number, minute: number, second: number) {
    this._hour = hour;
    this._minute = minute;
    this._second = second;
    this._date.setHours(hour);
    this._date.setMinutes(minute);
    this._date.setSeconds(second);
  }

  public toString() {
    function initialTime(time: number): string {
      if (time < 10) {
        return `0${time}`;
      } else {
        return time.toString();
      }
    }

    const hourTime = initialTime(this._hour);
    const minuteTime = initialTime(this._minute);
    const secondTime = initialTime(this._second);

    return `${hourTime}:${minuteTime}:${secondTime}`;
  }

  public nextSecond(): Time {
    this._date.setSeconds(this._date.getSeconds() + 1);

    this._second = this._date.getSeconds();
    this._hour = this._date.getHours();
    this._minute = this._date.getMinutes();

    return this;
  }

  public previousSecond(): Time {
    this._date.setSeconds(this._date.getSeconds() - 1);

    this._second = this._date.getSeconds();
    this._hour = this._date.getHours();
    this._minute = this._date.getMinutes();

    return this;
  }
}
