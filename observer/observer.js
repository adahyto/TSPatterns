var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.setPressure = function (pres) {
        console.log("WeatherStation: new preassure measurement: " + pres);
        this.pressure = pres;
        this.notifyObservers();
    };
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.pressure);
        }
    };
    return WeatherStation;
}());
var PressureDisplay = /** @class */ (function () {
    function PressureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    PressureDisplay.prototype.update = function (pressure) {
        console.log(weatherStation.pressure);
    };
    return PressureDisplay;
}());
var TankFill = /** @class */ (function () {
    function TankFill(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TankFill.prototype.update = function (pressure) {
        if (pressure > 2.5) {
            console.log('Tank is full of water - water pump: off');
        }
        else if (pressure < 1.2) {
            console.log('water pump: on');
            weatherStation.setPressure(2.5);
        }
    };
    return TankFill;
}());
var weatherStation = new WeatherStation();
var pressureDisplay = new PressureDisplay(weatherStation);
var tankFill = new TankFill(weatherStation);
weatherStation.setPressure(2.2);
weatherStation.setPressure(1.5);
weatherStation.setPressure(1.1);
/*document.getElementById('openWaterFlow').addEventListener("click", ()=>{
  let i;
  for(i = 2.5; i< 1.2 ;i--){
    weatherStation.setPressure(i);
  }
});
*/
