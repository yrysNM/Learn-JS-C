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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const limitMetadataKey = Symbol("limit");
let MyCarD = class MyCarD {
    constructor() {
        this.fuel = "50%";
        this.open = true;
        this._weight = 1000;
    }
    isOpen(value) {
        console.log(this.fuel);
        return this.open ? "open" : `close ${value}`;
    }
    startTravel(passengers) {
        console.log(`Started with ${passengers} passengers`);
    }
};
__decorate([
    checkNumberOfSeatsD(4),
    __metadata("design:type", Number)
], MyCarD.prototype, "freeSeats", void 0);
__decorate([
    checkAmountOfFuelD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyCarD.prototype, "isOpen", null);
__decorate([
    __param(0, limit),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MyCarD.prototype, "startTravel", null);
MyCarD = __decorate([
    changeDoorStatusD(false),
    changeAmountOfFueldD(95)
], MyCarD);
function limit(target, propertyKey, parametrIndex) {
    // console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));
    // console.log(Reflect.getOwnMetadata("design:paramtypes", target, propertyKey));
    // console.log(Reflect.getOwnMetadata("design:returntype", target, propertyKey));
    let limitedParametrs = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
    limitedParametrs.push(parametrIndex);
    Reflect.defineMetadata(limitMetadataKey, limitedParametrs, target, propertyKey);
}
function checkNumberOfSeatsD(limit) {
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
function checkAmountOfFuelD(target, propertyKey, descriptor) {
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
function changeDoorStatusD(status) {
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
function changeAmountOfFueldD(amount) {
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
const carD = new MyCarD();
console.log(carD);
