interface ICar {
  fuel: string;
  open: boolean;
  freeSeats: number;
}

// @closeMCar
@changeDoorStatusM(false)
@changeAmountOfFueldM(95)
class MyCarM implements ICar {
  fuel: string = "50%";
  open: boolean = true;
  errors: any;
  _weight: number = 1000;

  get weight() {
    return this._weight;
  }

  @log
  set weight(num: number) {
    this._weight = this._weight + num;
  }

  @checkNumberOfSeatsM(4)
  freeSeats: number;

  @checkAmountOfFuelM
  isOpen(value: string) {
    console.log(this.fuel);
    return this.open ? "open" : `close ${value}`;
  }
}

function log(
  target: Object,
  propertyKey: string | Symbol,
  descriptor: PropertyDescriptor
) {
  const oldValue = descriptor.set;
  const oldGetValue = descriptor.get;

  descriptor.set = function (this: any, ...args: any) {
    console.log(`Изменяем значение на ${[...args]}`);
    return oldValue?.apply(this, args);
  };

  descriptor.get = function () {
    console.log(`test`);
    return oldGetValue?.apply(this);
  };
}

function checkNumberOfSeatsM(limit: number) {
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

function checkAmountOfFuelM(
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
function changeDoorStatusM(status: boolean) {
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
function changeAmountOfFueldM(amount: number) {
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
carM.weight = 3;
console.log(carM.weight);

// carM.freeSeats = 3;
// console.log(carM);
// console.log(carM.errors);

// console.log(carM.isOpen("checked"));
