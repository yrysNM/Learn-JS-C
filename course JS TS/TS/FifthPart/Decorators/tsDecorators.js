var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @closeMCar
var MyCar = /** @class */ (function () {
    function MyCar() {
        this.fuel = "50%";
        this.open = true;
    }
    MyCar.prototype.isOpen = function () {
        console.log(this.fuel);
        return this.open ? "open" : "close";
    };
    MyCar = __decorate([
        changeDoorStatus(true),
        changeAmountOfFueld(95)
    ], MyCar);
    return MyCar;
}());
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
    return function (target, context) {
        console.log("door changed");
        //   constructor.prototype.open = false;
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.open = status;
                return _this;
            }
            return class_1;
        }(target));
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
    return function (target, context) {
        console.log("fuel changed");
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.fuel = "".concat(amount, "%");
                return _this;
            }
            return class_2;
        }(target));
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
var car = new MyCar();
console.log(car.isOpen());
