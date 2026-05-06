export class Animal {
    name;
    age;
    colour;
    // readonly properties can only be set during initialization or in the constructor
    constructor(name, age, colour) {
        this.name = name;
        this.age = age;
        this.colour = colour;
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    set setAge(newAge) {
        if (newAge < 0) {
            console.error("Age cannot be negative.");
            return;
        }
        else if (newAge > 15) {
            console.warn("Age seems unusually high. Are you sure?");
        }
        else {
            this.age = newAge;
        }
    }
}
// Create an instance of the Animal class using the constructor
// const myAnimal = new Animal("Buddy", 5, "Brown");
// console.log(myAnimal);
// console.log(myAnimal.speak());
// const myAnimal2 = new Animal("Mittens", 3);
// console.log(myAnimal2);
// console.log(myAnimal2.speak());
export class Dog extends Animal {
    breed;
    constructor(name, age, breed, colour) {
        super(name, age, colour);
        this.breed = breed;
    }
    fetch() {
        return `${this.getName} is fetching the ball!`;
    }
    speak() {
        return `${this.getName} barks.`;
    }
}
const myDog = new Dog("Rex", 4, "Labrador", "Black");
console.log(myDog);
console.log(myDog.speak());
console.log(myDog.fetch());
myDog.setAge = 2_000_000_000; // We can change the age using the setter
console.log(myDog);
export class Bird extends Animal {
    constructor(name, age, colour) {
        super(name, age, colour);
    }
    speak() {
        return `${this.getName} chirps.`;
    }
    fly() {
        return `${this.getName} is flying!`;
    }
}
//# sourceMappingURL=oop.js.map