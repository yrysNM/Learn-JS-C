interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(temperature: number): void;
}

class WeatherStation implements Subject {
  private temperature: number = 0;
  private observers: Observer[] = [];

  setTemperature(temp: number) {
    console.log(`WeatheStation: new temperature measurement: ` + temp);

    this.temperature = temp;
    this.notifyObservers();
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);

    this.observers.splice(index, 1);
  }

  notifyObservers() {
    for (let observers of this.observers) {
      observers.update(this.temperature);
    }
  }
}

class TemperatureDisplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number): void {
    console.log(`TemperatureDisplay: I need to update my display.`);
    // Logic would go here
  }
}

class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number): void {
    if (temperature > 25) {
      console.log("Fan: its hot here, turining myself on..");
    } else {
      console.log(`Fan: its nice and cool, turning myself off..`);
    }
  }
}

let weatherStation = new WeatherStation();

let tempDispay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
