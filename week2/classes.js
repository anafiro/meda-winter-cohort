let car1 = {
    "make": "Honda",
    "year": 1998,
    "model": "Civic"
};

let car2 = {
    "year": 2010,
    "model": "Accord"
};


 
// The class is always starts with the capital letter like Car. Class Car is a blue print for other things. 
class Car {
    constructor(make, model, year) {
        
        if (year > 2021) {
            console.log("Are you sure about the year for " + make + model + "? It seems to be awefully high!");
            this.year = NaN;
        } else {
            this.year = year;
        }
        this.make = make;
        this.model = model;
        this.currentFuelGallons = 0;
        this.fuelCapacity = 15;
        this.registeredDate = new Date(Date.now());
        this.expiredDate = null;
    }
    // This is the method used with a class.
    checkFuel() {
        console.log(`The car ${this.make} ${this.model} has ${this.currentFuelGallons} gallons of gas left in the tank.`);
    }
    // I do not understand the Date class!!!!!!!
    retire() {
        this.expiredDate = new Date(Date.now());
    }

    refuel(gallons) {
        if (typeof gallons === "number") {
            
            if (gallons > this.fuelCapacity - this.currentFuelGallons) {
                console.log("There is not enough room in the tank for that many gallons! Topping off the tank instead.")
                this.currentFuelGallons = this.fuelCapacity;
                gallons = this.fuelCapacity;
            } else {
                this.currentFuelGallons = this.currentFuelGallons + gallons;
            }


            console.log("Refuel successful, added " + gallons + " to the tank.");
        } else {
            console.log("Refueling needs a valid number!");
        }
    }
}



// creating new objects. The keyword new indicate an object is created. when it is created, we pass values like Tesla, 2016, andetc.

let car3 = new Car("Tesla", "X", 2016);
let car4 = new Car("Chevy", "Bolt", 2016);
let car6 = new Car("Voltswagen", "Golf II", 19800);


car4.checkFuel();
car3.checkFuel();

car4.refuel(400);
car4.checkFuel();



console.log("The car" + car4.make + car4.model + "has" + car3.currentFuelGallons + "gallons of gas left.");
