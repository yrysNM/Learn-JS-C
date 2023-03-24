"use strict";
class PlayerT {
    static game;
    #login;
    _password;
    server;
    consent;
    constructor(login) {
        this.#login = login;
    }
    static {
        PlayerT.game = "AOD";
    }
    get password() {
        return this._password;
    }
    set password(newPass) {
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
    connect() {
        // smth do
        return this;
    }
    isPro() {
        return this instanceof CompoetitivePlayerT ? true : false;
    }
}
const playerT = new PlayerT("test");
console.log(playerT.connect().login());
// const test = playerT.login.bind(playerT); // => or we can do arrow functionm
const test = playerT.login;
test();
class CompoetitivePlayerT extends PlayerT {
    rank;
    checkLogin() {
        return this.login();
    }
    isConsented() {
        this.consent ? "Yes" : "No";
    }
}
const player2 = new CompoetitivePlayerT("Test2");
console.log(player2.connect().login());
// console.log(player2.checkLogin());
const somePLayer = new CompoetitivePlayerT("Test3");
somePLayer.isPro() ? console.log(somePLayer) : console.log(somePLayer);
