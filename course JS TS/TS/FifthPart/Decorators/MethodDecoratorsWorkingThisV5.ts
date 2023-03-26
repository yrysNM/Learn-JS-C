interface ICarV5 {
  fuel: string;
  open: boolean;
  freeSeats: number;
}

// @closeMCar
@changeDoorStatusV5(false)
@changeAmountOfFueldV5(95)
class MyCarMV5 implements ICarV5 {
  fuel: string = "50%";
  open: boolean = true;
  errors: any;
  _weight: number = 1000;

  @logOnSet
  set weight(num: number) {
    this._weight = this._weight + num;
  }

  @logOnGet
  get weight() {
    return this._weight;
  }

  @checkNumberOfSeatsV5(5)
  freeSeats: number = 3;

  @checkAmountOfFuelV5
  isOpen(value: string) {
    console.log(this.fuel);
    return this.open ? "open" : `close ${value}`;
  }
}

function logOnSet<T, R>(
  target: (this: T, value: number) => R,
  context: ClassSetterDecoratorContext<T, number>
) {
  return function (this: T, ...args: any): R {
    console.log(`Изменяем значение на ${[...args]}`);
    return target.apply(this, args);
  };
}

function logOnGet<T, R>(
  target: (this: T) => R,
  context: ClassGetterDecoratorContext<T, number>
) {
  return function (this: T): R {
    console.log(`test`);
    return target.apply(this);
  };
}

function checkNumberOfSeatsV5(limit: number) {
  return function (target: undefined, context: ClassFieldDecoratorContext) {
    return function (this: any, newAmount: number) {
      if (newAmount >= 1 && newAmount < limit) {
        return newAmount;
      } else {
        throw new Error(`Больше ${limit} сидений быть не может, меньше 1 тоже`);
      }
    };
  };
}

function checkAmountOfFuelV5<T, A extends any[], R>(
  target: (this: T, ...args: A) => R,
  context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
) {
  return function (this: T, ...args: A): R {
    // console.log(this.fuel);
    console.log(`${String(context.name)} был запущен`);
    return target.apply(this, args);
  };
}

// ts version 5
function changeDoorStatusV5(status: boolean) {
  return <T extends { new (...args: any[]): {} }>(
    target: T,
    context: ClassDecoratorContext<T>
  ) => {
    return class extends target {
      open = status;
    };
  };
}

// ts version 5
function changeAmountOfFueldV5(amount: number) {
  return <T extends { new (...args: any[]): {} }>(
    target: T,
    context: ClassDecoratorContext<T>
  ) => {
    return class extends target {
      fuel = `${amount}%`;
    };
  };
}

const carMV5 = new MyCarMV5();
carMV5.freeSeats = -1;
console.log(carMV5);
console.log(carMV5.errors);

console.log(carMV5.isOpen("checked"));
