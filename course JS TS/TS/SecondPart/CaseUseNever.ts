interface CarN {
  name: "car";
  engine: string;
  wheels: {
    number: number;
    type: string;
  };
}

interface ShipN {
  name: "ship";
  engine: string;
  sail: string;
}

interface AirplaneN {
  name: "airplane";
  engine: string;
  wings: string;
}

interface SuperAirplaneN {
  name: "smth";
  engine: string;
  wings: string;
}

type Vehical = CarN | ShipN | AirplaneN | SuperAirplaneN;

function repairVehicleN(vehicle: Vehical) {
  //   if (isCarN(vehicle)) {
  //     console.log(vehicle.wheels);
  //   } else if (isShipN(vehicle)) {
  //     console.log(vehicle.sail);
  //   } else {
  //     // const smth: never = vehicle;

  //     vehicle.wings;
  //   }
  switch (vehicle.name) {
    case "car":
      console.log(vehicle.wheels);
      break;
    case "ship":
      console.log(vehicle.sail);
      break;
    case "airplane":
      console.log(vehicle.wings);
      break;
    case "smth":
      console.log(vehicle.wings);
      break;
    default:
      const smth: never = vehicle;
      console.log("Ouuups!");
  }
}

function isCarN(car: Vehical): car is CarN {
  return "wheels" in car;
}

function isShipN(ship: Vehical): ship is ShipN {
  return "sil" in ship;
}
