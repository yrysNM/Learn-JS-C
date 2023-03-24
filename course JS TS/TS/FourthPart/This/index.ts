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

  // login() {
  // return `Player ${this.#login} online!`;
  // }

  login = () => {
    return `PLayer ${this.#login} online`;
  };

  connect(): PlayerT {
    // smth do
    return this;
  }

  isPro(): this is CompoetitivePlayerT {
    return this instanceof CompoetitivePlayerT ? true : false;
  }
}

const playerT = new PlayerT("test");

console.log(playerT.connect().login());
// const test = playerT.login.bind(playerT); // => or we can do arrow functionm
const test = playerT.login;
test();

class CompoetitivePlayerT extends PlayerT {
  rank: number;

  checkLogin() {
    return this.login();
  }
  private isConsented() {
    this.consent ? "Yes" : "No";
  }
}

const player2 = new CompoetitivePlayerT("Test2");

console.log(player2.connect().login());
// console.log(player2.checkLogin());

const somePLayer: PlayerT | CompoetitivePlayerT = new CompoetitivePlayerT(
  "Test3"
);
somePLayer.isPro() ? console.log(somePLayer) : console.log(somePLayer);
