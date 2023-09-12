export class Time {
  private _hour: number;
  private _minute: number;
  private _second: number;

  constructor(hour: number, minute: number, second: number) {
    this._hour = hour;
    this._minute = minute;
    this._second = second;
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
  }

  public set minute(minute: number) {
    this._minute = minute;
  }

  public set secound(second: number) {
    this._second = second;
  }

  public setTime(hour: number, minute: number, second: number) {
    this._hour = hour;
    this._minute = minute;
    this._second = second;
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

  /**
   * @FIX fix error time for 23:59:60 + 1 => 61 with new Date getHour etc
   * @returns time
   */
  public nextSecond(): Time {
    this._second += 1;
    return this;
  }

  public previousSecond(): Time {
    this._second -= 1;
    return this;
  }
}
