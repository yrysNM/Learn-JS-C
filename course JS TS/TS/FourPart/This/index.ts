class PlayerT {
  private static game: string;

  #login: string;
  private _password: string;
  public server: string;
  protected consent: boolean;

  constructor(login: string) {
    this.#login = login;
  }

  static {
    PlayerT.game = "AOD";
  }

  get password() {
    return this._password;
  }

  set password(newPass: string) {
    this._password = newPass;
  }

  static getGameName() {
    return PlayerT.game;
  }

  login() {
    return `Player ${this.#login} online!`;
  }
}

const playerT = new PlayerT("test");

console.log(playerT.login());
const teset = playerT.login;
teset();
