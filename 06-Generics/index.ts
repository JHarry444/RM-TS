import { Bird, Dog, type Animal } from "./oop.js";

class Cage{
    private animals: Animal[] = [];

    addAnimal(animal: Animal): boolean {
        this.animals.push(animal);
        return this.animals.includes(animal);
    }

    removeAnimal(animal: Animal): boolean {
        const index = this.animals.indexOf(animal); 
        if (index !== -1) {
            this.animals.splice(index, 1);
        }
        return !this.animals.includes(animal);
    }

    getAnimals(): Animal[] {
        return this.animals;
    }
}

const kennel = new Cage();
kennel.addAnimal(new Dog("Rex", 4, "Labrador", "Black"));
kennel.addAnimal(new Bird("Tweety", 2, "Yellow"));

for (const animal of kennel.getAnimals()) {
    console.log(animal.speak());

    if (animal instanceof Dog) {
        console.log(animal.fetch());
    } else if (animal instanceof Bird) {
        console.log(animal.fly());
    }   
    
}

class GenericCage<T extends Animal>{
    private animals: T[] = [];

    addAnimal(animal: T): boolean {
        this.animals.push(animal);
        return this.animals.includes(animal);
    }

    removeAnimal(animal: T): boolean {
        const index = this.animals.indexOf(animal); 
        if (index !== -1) {
            this.animals.splice(index, 1);
        }
        return this.animals.includes(animal);
    }

    getAnimals(): T[] {
        return this.animals;
    }
}

const kennel2 = new GenericCage<Dog>();
kennel2.addAnimal(new Dog("Rex", 4, "Labrador", "Black"));
for (const animal of kennel2.getAnimals()) {
    console.log(animal.speak());
    console.log(animal.fetch());
    
}

kennel2.addAnimal(new Bird("Tweety", 2, "Yellow")); // This will cause a compile-time error because Bird is not a Dog

const birdCage = new GenericCage<Bird>();
birdCage.addAnimal(new Bird("Tweety", 2, "Yellow"));    