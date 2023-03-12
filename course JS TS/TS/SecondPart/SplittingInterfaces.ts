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

interface ComplexVechival {
  name: "car" | "ship" | "airplane";
  engine: string;
  wheels?: number;
  sail?: string;
  wings?: string;
}

type TVehical = CarN | ShipN | AirplaneN;

const car: ComplexVechival = {
  name: "car",
  engine: "V8",
};

function repairVehicleN(vehicle: ComplexVechival) {
  switch (vehicle.name) {
    case "car":
      console.log(vehicle.wheels! * 2); // HOT ! symbol
      break;
    case "ship":
      console.log(vehicle.sail);
      break;
    case "airplane":
      console.log(vehicle.wings);
      break;
    default:
      //   const smth: never = vehicle; // not working
      console.log("Ouuups!");
  }
}

repairVehicleN(car);
