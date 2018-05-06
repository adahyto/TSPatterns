abstract class Car {
  public description: string;
  public getDescription(): string{
    return this.description;
  }
  public abstract cost(): number;
}

class TeslaS extends Car{
  public description = "Tesla model S";
  public cost(): number{
    return 2800000;
  }
}

class TeslaX extends Car{
  public description = "Tesla model X";
  public cost(): number{
    return 3200000;
  }
}

abstract class CarOptions extends Car{
  decoratedCar: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class EnchancedAutoPilot extends CarOptions{
  decoratedCar: Car;
  constructor(car:Car){
    super();
    this.decoratedCar = car;
  }
  public getDescription(): string{
    return this.decoratedCar.getDescription() + ', Enchanced AutoPilot'
  }
  public cost(): number{
    return this.decoratedCar.cost() + 200000;
  }
}

class PanoramicRoofTop extends CarOptions{
  decoratedCar: Car;
  constructor(car:Car){
    super();
    this.decoratedCar = car;
  }
  public getDescription(): string{
    return this.decoratedCar.getDescription() + ',PanoramicRoofTop'
  }
  public cost(): number{
    return this.decoratedCar.cost() + 170000;
  }
}


let myTeslaS = new TeslaS();
myTeslaS = new PanoramicRoofTop(myTeslaS);
myTeslaS = new EnchancedAutoPilot(myTeslaS);
console.log(myTeslaS.cost());
console.log(myTeslaS.getDescription());
