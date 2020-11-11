// Animal is a base class. 
class Animal {
    // we do not assign the alive from the beginning. We first assign it to true and then later we assign alive to constructor.
    constructor(alive) {
    // the keyword this refers to an object that the object is currently executing the code!
        this.living = alive;
    }

    died() {
        this.living = false;
    }
}
// extends signal the inheriting process.
class Mammal extends Animal {
    constructor(alive, eyeColor) {
        // super should be placed in here on the top and it refers to the animal class!
        super(alive);
        this.tail = 1;
        this.type = "mammal";
        this.eyes = 2;
        this.eyeColor = eyeColor;
    }

    eat() {
        // I did not understand why Eduardo used IN THIS here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if ("name" in this) {
            console.log(this.name + " eats some food.");
        } else {
            console.log("Animal eats some food");
        }
    }
    // here the BREED  function confuses me. It seems a complicated one.
    breed(partner, childName) {
        if (partner.constructor.name == this.constructor.name) {
            console.log("successful breeding");
            
            let eyeInheritance = Math.random() * 2;
            eyeInheritance = Math.floor(eyeInheritance);

            let childEyeColor;

            if (eyeInheritance == 0) {
                childEyeColor = this.eyeColor;
            } else {
                childEyeColor = partner.eyeColor;
            }
            // why do we use THIS.CONSTRUCTOR in here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            let child = new this.constructor(childName, true, childEyeColor);
            return child;
        }
    }
}

class Dog extends Mammal {
    constructor(dogName, alive, eyeColor) {
        // This function runs the constructor of the class we are inheriting, it is important to run it first before any other lines of our Dog constructor class.
        super(alive, eyeColor);
        this.legs = 4;
        this.name = dogName;

    }

    bark() {
        console.log("woof woof!");
    }
}

class Cat extends Mammal {
    constructor(catName, alive, eyeColor) {
        super(alive, eyeColor);
        this.legs = 4;
        this.name = catName;
    }

    meow() {
        console.log("meow!");
    }
}
// True refers to alive up there.
let dog1 = new Dog("Fido", true, "brown");
let dog2 = new Dog("Fluffy", true, "green");
let dog3 = new Dog("Pluto", true, "amber");
// I do not undestand here what we did! Why are we PUTTING  BREED in here!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let newDog = dog2.breed(dog1, "Spot");
let newDog2 = dog3.breed(dog2, "Fluffy Jr.");

console.log(newDog);
console.log(newDog2);

let cat1 = new Cat("Coco", true, "aqua");
let cat2 = new Cat("Lucy", true, "amber");

let newCat1 = cat1.breed(cat2, "Scratchy");

console.log(newCat1);


