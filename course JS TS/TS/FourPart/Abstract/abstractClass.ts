interface IEngine {
  model: string;
  capacity: number;
  startEngine: (time: Date) => string;
}

abstract class AbstractVehicle {
  model: string;
  capacity: number;
  abstract startEngine: (time: Date) => string;

  stopEngine(time: Date): string {
    this.startEngine(new Date());
    return `Engine Stopped ${time.toLocaleDateString()}`;
  }
}

// class Vehicle implements IEngine {
//   model: string;
//   capacity: number;
//   startEngine = (time: Date): string => {
//     return `Started`;
//   };
// }

class Vehicle extends AbstractVehicle {
  startEngine = (time: Date): string => {
    return `Started`;
  };
}

new Vehicle().startEngine(new Date());
