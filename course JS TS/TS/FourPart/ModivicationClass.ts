function setName() {
  return "COD";
}

class Player {
  //   static game: string = "COD";
  private static game: string;
  private _login: string;
  private _password: string;
  protected server: string;
  protected consent: boolean;

  static {
    //static block only one more set
    Player.game = setName();
  }

  //   private constructor() {}  // new error

  get login() {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password() {
    return this._password;
  }

  set password(newPass: string) {
    this._password = newPass;
  }

  static getGameName() {
    return Player.game;
  }
}

class CompetityPlayer extends Player {
  rank: number;

  private isConsented() {
    this.consent ? "Yes" : "No";
  }
}

new Player();
new Player();
new Player();
console.log(Player.getGameName());

const player = new CompetityPlayer();
player.password = "frefe";

// class User {
//     public email: string;
//     public name: string;

//     constructor(email: string, name: string) {
//          this.email = email;
//          this.name = name;
//     }
// }

// class User {
//     constructor(public email: string, public name: string) {

//     }
// }
