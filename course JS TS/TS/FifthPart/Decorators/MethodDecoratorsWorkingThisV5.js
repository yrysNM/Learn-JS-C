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
var MyCarMV5 = /** @class */ (function () {
    function MyCarMV5() {
        this.fuel = "50%";
        this.open = true;
        this.freeSeats = 3;
    }
    MyCarMV5.prototype.isOpen = function (value) {
        console.log(this.fuel);
        return this.open ? "open" : "close ".concat(value);
    };
    __decorate([
        checkNumberOfSeatsV5(5)
    ], MyCarMV5.prototype, "freeSeats");
    __decorate([
        checkAmountOfFuelV5
    ], MyCarMV5.prototype, "isOpen");
    MyCarMV5 = __decorate([
        changeDoorStatusV5(false),
        changeAmountOfFueldV5(95)
    ], MyCarMV5);
    return MyCarMV5;
}());
function checkNumberOfSeatsV5(limit) {
    return function (target, context) {
        return function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                return newAmount;
            }
            else {
                throw new Error("\u0411\u043E\u043B\u044C\u0448\u0435 ".concat(limit, " \u0441\u0438\u0434\u0435\u043D\u0438\u0439 \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442, \u043C\u0435\u043D\u044C\u0448\u0435 1 \u0442\u043E\u0436\u0435"));
            }
        };
    };
}
function checkAmountOfFuelV5(target, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // console.log(this.fuel);
        console.log("".concat(String(context.name), " \u0431\u044B\u043B \u0437\u0430\u043F\u0443\u0449\u0435\u043D"));
        return target.apply(this, args);
    };
}
// ts version 5
function changeDoorStatusV5(status) {
    return function (target, context) {
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
// ts version 5
function changeAmountOfFueldV5(amount) {
    return function (target, context) {
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
var carMV5 = new MyCarMV5();
carMV5.freeSeats = -1;
console.log(carMV5);
console.log(carMV5.errors);
console.log(carMV5.isOpen("checked"));
