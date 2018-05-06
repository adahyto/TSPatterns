class CoffeeMaker{
    on() {
        console.log('CofeeMaker turning on...');
    }
    turnOff() {
        console.log('CoffeeMaker turning off..');
    }
    make() {
        console.log('coffee...');
    }
}

class Grinder{
    on() {
        console.log('Grinder turning on..');
    }
    turnOff() {
        console.log('Grinder turning off..');
    }
    setCoffee(source: string) {
        console.log('Getting coffee from ' + source);
    }
    setQuant(quantLevel: number) {
        console.log('Setting quantity to ' + quantLevel);
    }
}

class Lights{
    dim() {
        console.log('Lights are dimming..');
    }
}

class Laptop{
    on() {
        console.log('Laptop turning on..');
    }
    turnOff() {
        console.log('Laptop turning off..');
    }
}

class SnackMaker{
    on() {
        console.log('SnackMaker maker turning on..');
    }
    turnOff() {
        console.log('Snacmaker turning off..');
    }
    ready() {
        console.log('snacks ready!');
    }
}

class ProgrammingFacade{
  private coffeeMaker: CoffeeMaker;
  private grinder: Grinder;
  private lights: Lights;
  private laptop: Laptop;
  private snacks: SnackMaker;
  constructor(coffeeMaker: CoffeeMaker, grinder: Grinder, lights: Lights, laptop: Laptop, snacks: SnackMaker){
    this.coffeeMaker = coffeeMaker;
    this.grinder = grinder;
    this.lights = lights;
    this.laptop = laptop;
    this.snacks = snacks
  }
  public startNightSession(){
    this.coffeeMaker.on();
    this.grinder.on();
    this.grinder.setCoffee('crema');
    this.grinder.setQuant(2);
    this.grinder.turnOff();
    this.coffeeMaker.make();
    this.coffeeMaker.turnOff();
    this.laptop.on();
    this.lights.dim();
    this.snacks.on();
    this.snacks.ready();
    this.snacks.turnOff();
  }
  public endNightSession(){
    this.laptop.turnOff();
    this.snacks.on();
    this.snacks.ready();
    this.snacks.turnOff();
  }
}

let coffeeMaker = new CoffeeMaker();
let grinder = new Grinder();
let lights = new Lights();
let laptop = new Laptop();
let snacks = new SnackMaker();

let programmingNihtSession = new ProgrammingFacade(coffeeMaker, grinder, lights, laptop, snacks);
programmingNihtSession.startNightSession();
