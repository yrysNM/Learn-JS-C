export class Author {
  private _name: string;
  private _email: string;
  private _gender: string;

  constructor(name: string, email: string, gender: string) {
    this._name = name;
    this._email = email;

    this._gender = gender[0];
  }

  public getName() {
    return this._name;
  }

  public getEmail() {
    return this._email;
  }

  public setEmail(value: string) {
    this._email = value;
  }

  public getGender() {
    return this._gender;
  }

  public toString(): string {
    return `Author[name=${this._name},email=${this._email},gender=${this._gender}]`;
  }
}
