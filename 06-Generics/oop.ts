export abstract class Animal {
    // readonly properties can only be set during initialization or in the constructor


    constructor(private readonly name: string,
        private age: number,
        private colour?: string) {
    }

    abstract speak(): string;

    get getName(): string {
        return this.name;
    }

    get getAge(): number {
        return this.age;
    }
    set setAge(newAge: number) {
        if (newAge < 0) {
            console.error("Age cannot be negative.");
            return;
        } else if (newAge > 15) {
            console.warn("Age seems unusually high. Are you sure?");
        } else {
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
    private breed: string;
    constructor(name: string, age: number, breed: string, colour?: string) {
        super(name, age, colour);
        this.breed = breed;
    }
    fetch(): string {
        return `${this.getName} is fetching the ball!`;
    }

    speak(): string {
        return `${this.getName} barks.`;
    }
}

const myDog = new Dog("Rex", 4, "Labrador", "Black");
console.log(myDog);
console.log(myDog.speak());
console.log(myDog.fetch());

myDog.setAge = 2_000_000_000; // We can change the age using the setter
console.log(myDog); 


interface Flyable {
    fly(): string;
}

export class Bird extends Animal implements Flyable {
    constructor(name: string, age: number, colour?: string) {
        super(name, age, colour);
    }

    speak(): string {
        return `${this.getName} chirps.`;
    }

    fly(): string {
        return `${this.getName} is flying!`;
    }
}