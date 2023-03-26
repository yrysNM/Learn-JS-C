const myCar = {
  fuel: "100%",
  open: true,
  freeSeats: 3,
  isOpen() {
    console.log(this.fuel);

    return this.open ? "open" : "close";
  },
};

function closeCar(car: typeof myCar) {
  car.open = false;
  console.log("close car");

  return car;
}

function addFuel(car: typeof myCar) {
  car.fuel = "50%";
  console.log("add fuel");

  return car;
}

// console.log(closeCar(myCar).isOpen());
// console.log(addFuel(myCar).fuel);
addFuel(closeCar(myCar)).isOpen();
