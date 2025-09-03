class Car {
    constructor() {
        this.brand = null;
        this.model = null;
        this.year = null;
        this.engine = null;
        this.color = null;
        this.gps = null;
    }
  
    showDetails() {
      console.log(`
        ${this.year} 
        ${this.brand} 
        ${this.model} 
        - Motor: ${this.engine}, 
        Cor: ${this.color}, 
        GPS: ${this.gps ? "Sim" : "Não"}
      `);
    }
}
  
// Builder
class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    setBrand(brand) {
        this.car.brand = brand;
        return this;
    }

    setModel(model) {
        this.car.model = model;
        return this;
    }

    setYear(year) {
        this.car.year = year;
        return this;
    }

    setEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    setColor(color) {
        this.car.color = color;
        return this;
    }

    setGps(gps) {
        this.car.gps = gps;
        return this;
    }

    build() {
        return this.car;
    }
}
  

class CarDirector {
    static buildCarSport() {
        return new CarBuilder()
            .setBrand("HONDA")
            .setModel("Civic Type R")
            .setYear("2025")
            .setEngine("2.0 turbo")
            .setColor("WHITE")
            .setGps(true)
            .build();
    }

    static buildCarCommon() {
        return new CarBuilder()
            .setBrand("Volkswagen")
            .setModel("Volkswagen Polo")
            .setYear("2025")
            .setEngine("1.0 flex")
            .setColor("BLACK")
            .setGps(false)
            .build();
    }

    static buildCarFamily() {
        return new CarBuilder()
            .setBrand("Chevrolet")
            .setModel("Chevrolet Spin")
            .setYear("2012")
            .setEngine("1.8 Econoflex 8V flex")
            .setColor("WHITE")
            .setGps(true)
            .build();
    }
}


// Uso
const sportCar = CarDirector.buildCarSport();
const commonCar = CarDirector.buildCarCommon();
const familyCar = CarDirector.buildCarFamily();


sportCar.showDetails();
commonCar.showDetails();
familyCar.showDetails();
//satc.showConfig();
 