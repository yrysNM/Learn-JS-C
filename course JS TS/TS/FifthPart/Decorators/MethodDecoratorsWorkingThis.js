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
let MyCarM = class MyCarM {
    constructor() {
        this.fuel = "50%";
        this.open = true;
        this._weight = 1000;
    }
    get weight() {
        return this._weight;
    }
    set weight(num) {
        this._weight = this._weight + num;
    }
    isOpen(value) {
        console.log(this.fuel);
        return this.open ? "open" : `close ${value}`;
    }
};
__decorate([
    log,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MyCarM.prototype, "weight", null);
__decorate([
    checkNumberOfSeatsM(4),
    __metadata("design:type", Number)
], MyCarM.prototype, "freeSeats", void 0);
__decorate([
    checkAmountOfFuelM,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyCarM.prototype, "isOpen", null);
MyCarM = __decorate([
    changeDoorStatusM(false),
    changeAmountOfFueldM(95)
], MyCarM);
function log(target, propertyKey, descriptor) {
    const oldValue = descriptor.set;
    const oldGetValue = descriptor.get;
    descriptor.set = function (...args) {
        console.log(`Изменяем значение на ${[...args]}`);
        return oldValue === null || oldValue === void 0 ? void 0 : oldValue.apply(this, args);
    };
    descriptor.get = function () {
        console.log(`test`);
        return oldGetValue === null || oldGetValue === void 0 ? void 0 : oldGetValue.apply(this);
    };
}
function checkNumberOfSeatsM(limit) {
    return function (target, propertyKey) {
        let value;
        let symbol = Symbol();
        const getter = function () {
            // return value;
            return this[symbol];
        };
        const setter = function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                this[symbol] = newAmount;
            }
            else {
                // console.log(`Больше ${limit} сидений быть не может`);9
                Object.defineProperty(target, "errors", {
                    value: `Больше ${limit} сидений быть не может`,
                });
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
function checkAmountOfFuelM(target, propertyKey, descriptor) {
    // descriptor.enumerable = false;
    const oldValue = descriptor.value;
    descriptor.value = function (...args) {
        // console.log(this);
        console.log(this.fuel);
        return oldValue.apply(this, args);
        // console.log(this.fuel);
        // return this.open ? "open" : "close";
    };
}
// ts version 5
function changeDoorStatusM(status) {
    return (target
    // context: ClassDecoratorContext<T>
    ) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.open = status;
            }
        };
    };
}
// ts version 5
function changeAmountOfFueldM(amount) {
    return (target
    // context: ClassDecoratorContext<T>
    ) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.fuel = `${amount}%`;
            }
        };
    };
}
const carM = new MyCarM();
carM.weight = 3;
console.log(carM.weight);
// carM.freeSeats = 3;
// console.log(carM);
// console.log(carM.errors);
// console.log(carM.isOpen("checked"));
