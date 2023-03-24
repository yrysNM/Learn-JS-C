"use strict";
class AbstractVehicle {
    model;
    capacity;
    stopEngine(time) {
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
    startEngine = (time) => {
        return `Started`;
    };
}
new Vehicle().startEngine(new Date());
