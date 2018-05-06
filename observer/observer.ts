interface Subject{
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer{
  update(pressure: number);
}

class WeatherStation implements Subject{
  public pressure: number;
  private observers: Observer[] = [];
  setPressure(pres: number) {
    console.log(`WeatherStation: new preassure measurement: ${pres}`)
    this.pressure = pres;
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
    for(let observer of this.observers){
      observer.update(this.pressure);
    }
  }
}

class PressureDisplay implements Observer {
  private subject: Subject;
  constructor(weatherStation: Subject){
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(pressure: number) {
    console.log(weatherStation.pressure);
  }
}

class TankFill implements Observer {
  private subject: Subject;
  constructor(weatherStation: Subject){
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(pressure: number) {
    if(pressure > 2.5){
      console.log('Tank is full of water - water pump: off')
    }else if(pressure < 1.2){
      console.log('water pump: on')
      weatherStation.setPressure(2.5);
    }
  }
}

let weatherStation = new WeatherStation();

let pressureDisplay = new PressureDisplay(weatherStation);
let tankFill = new TankFill(weatherStation);

weatherStation.setPressure(2.2);
weatherStation.setPressure(1.5);
weatherStation.setPressure(1.1);


/*document.getElementById('openWaterFlow').addEventListener("click", ()=>{
  for(let i = 2.5; i< 1.2 ;i--){
    weatherStation.setPressure(i);
  }
});
*/
