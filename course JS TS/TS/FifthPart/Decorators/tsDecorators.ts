interface ICar {
  fuel: string;
  open: boolean;
  freeSeats: number;
}

// @closeMCar
@changeDoorStatus(true)
@changeAmountOfFueld(95)
class MyCar implements ICar {
  fuel: string = "50%";
  open: boolean = true;
  freeSeats: number;

  isOpen() {
    console.log(this.fuel);
    return this.open ? "open" : "close";
  }
}

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
function changeDoorStatus(status: boolean) {
  console.log("door init");

  return <T extends { new (...args: any[]): {} }>(
    target: T,
    context: ClassDecoratorContext<T>
  ) => {
    console.log("door changed");
    //   constructor.prototype.open = false;
    return class extends target {
      open = status;
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
function changeAmountOfFueld(amount: number) {
  console.log("fuel init");
  return <T extends { new (...args: any[]): {} }>(
    target: T,
    context: ClassDecoratorContext<T>
  ) => {
    console.log("fuel changed");
    return class extends target {
      fuel = `${amount}%`;
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
