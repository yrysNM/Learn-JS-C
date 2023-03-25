interface ICar {
  fuel: string;
  open: boolean;
  freeSeats: number;
}

// @closeMCar
@changeDoorStatus(false)
@changeAmountOfFueld(95)
class MyCarM implements ICar {
  fuel: string = "50%";
  open: boolean = true;
  errors: any;

  @checkNumberOfSeats(4)
  freeSeats: number;

  @checkAmountOfFuel
  isOpen(value: string) {
    console.log(this.fuel);
    return this.open ? "open" : `close ${value}`;
  }
}

function checkNumberOfSeats(limit: number) {
  return function (target: Object, propertyKey: string | symbol) {
    let value: number;
    let symbol = Symbol();

    const getter = function (this: any) {
      // return value;
      return this[symbol];
    };

    const setter = function (this: any, newAmount: number) {
      if (newAmount >= 1 && newAmount < limit) {
        this[symbol] = newAmount;
      } else {
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

function checkAmountOfFuel(
  target: Object,
  propertyKey: string | Symbol,
  descriptor: PropertyDescriptor
) {
  // descriptor.enumerable = false;
  const oldValue = descriptor.value;
  descriptor.value = function (this: any, ...args: any[]) {
    // console.log(this);
    console.log(this.fuel);

    return oldValue.apply(this, args);
    // console.log(this.fuel);
    // return this.open ? "open" : "close";
  };
}

// ts version 5
function changeDoorStatus(status: boolean) {
  return <T extends { new (...args: any[]): {} }>(
    target: T
    // context: ClassDecoratorContext<T>
  ) => {
    return class extends target {
      open = status;
    };
  };
}

// ts version 5
function changeAmountOfFueld(amount: number) {
  return <T extends { new (...args: any[]): {} }>(
    target: T
    // context: ClassDecoratorContext<T>
  ) => {
    return class extends target {
      fuel = `${amount}%`;
    };
  };
}

const carM = new MyCarM();
carM.freeSeats = 3;
console.log(carM);
console.log(carM.errors);

// console.log(carM.isOpen("checked"));
