"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @closeMCar
let MyCar = class MyCar {
    constructor() {
        this.fuel = "50%";
        this.open = true;
    }
    isOpen() {
        console.log(this.fuel);
        return this.open ? "open" : "close";
    }
};
MyCar = __decorate([
    changeDoorStatus(true),
    changeAmountOfFueld(95)
], MyCar);
// function changeDoorStatus(status: boolean) {
//   console.log("door init");
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     console.log("door changed");
//     //   constructor.prototype.open = false;
//     return class extends constructor {
//       open = status;
//     };
//   };
// }
// ts version 5
function changeDoorStatus(status) {
    console.log("door init");
    return (target, context) => {
        console.log("door changed");
        //   constructor.prototype.open = false;
        return class extends target {
            constructor() {
                super(...arguments);
                this.open = status;
            }
        };
    };
}
// function changeAmountOfFueld(amount: number) {
//   console.log("fuel init");
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     console.log("fuel changed");
//     return class extends constructor {
//       fuel = `${amount}%`;
//     };
//   };
// }
// ts version 5
function changeAmountOfFueld(amount) {
    console.log("fuel init");
    return (target, context) => {
        console.log("fuel changed");
        return class extends target {
            constructor() {
                super(...arguments);
                this.fuel = `${amount}%`;
            }
        };
    };
}
// function closeMCar<T extends { new (...args: any[]): {} }>(constructor: T) {
//   //   constructor.prototype.open = false;
//   return class extends constructor {
//     open = false;
//   };
// }
// function addFuels(car: MyCar) {
//   car.fuel = "100%";
//   return car;
// }
const car = new MyCar();
console.log(car.isOpen());
