"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @closeMCar
let MyCarMV5 = class MyCarMV5 {
    constructor() {
        this.fuel = "50%";
        this.open = true;
        this._weight = 1000;
        this.freeSeats = 3;
    }
    set weight(num) {
        this._weight = this._weight + num;
    }
    get weight() {
        return this._weight;
    }
    isOpen(value) {
        console.log(this.fuel);
        return this.open ? "open" : `close ${value}`;
    }
};
__decorate([
    logOnSet,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MyCarMV5.prototype, "weight", null);
__decorate([
    checkNumberOfSeatsV5(5),
    __metadata("design:type", Number)
], MyCarMV5.prototype, "freeSeats", void 0);
__decorate([
    checkAmountOfFuelV5,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyCarMV5.prototype, "isOpen", null);
MyCarMV5 = __decorate([
    changeDoorStatusV5(false),
    changeAmountOfFueldV5(95)
], MyCarMV5);
function logOnSet(target, context) {
    return function (...args) {
        console.log(`Изменяем значение на ${[...args]}`);
        return target.apply(this, args);
    };
}
function logOnGet(target, context) {
    return function () {
        console.log(`test`);
        return target.apply(this);
    };
}
function checkNumberOfSeatsV5(limit) {
    return function (target, context) {
        return function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                return newAmount;
            }
            else {
                throw new Error(`Больше ${limit} сидений быть не может, меньше 1 тоже`);
            }
        };
    };
}
function checkAmountOfFuelV5(target, context) {
    return function (...args) {
        // console.log(this.fuel);
        console.log(`${String(context.name)} был запущен`);
        return target.apply(this, args);
    };
}
// ts version 5
function changeDoorStatusV5(status) {
    return (target, context) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.open = status;
            }
        };
    };
}
// ts version 5
function changeAmountOfFueldV5(amount) {
    return (target, context) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.fuel = `${amount}%`;
            }
        };
    };
}
const carMV5 = new MyCarMV5();
carMV5.freeSeats = -1;
console.log(carMV5);
console.log(carMV5.errors);
console.log(carMV5.isOpen("checked"));
