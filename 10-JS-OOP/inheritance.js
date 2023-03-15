// inheritance

class Vehicle {
  constructor(make, model, year) {
    (this.make = make), (this.model = model), (this.year = year);
  }
  start = function () {
    console.log('Engine started');
  };
  info = function () {
    console.log(`This car is a make of ${this.make}`);
  };
}

class Bike extends Vehicle {
  constructor(make, model, year, km) {
    super(make, model, year);
    this.km = km;
  }
}

const car1 = new Vehicle('Volkswagen', 'Golf', 2009);
car1.start();
car1.info();

const bike1 = new Bike('Ducati', 'Enduro', 2012, 23400);
bike1.start();
bike1.info();
