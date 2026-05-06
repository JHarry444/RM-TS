export declare abstract class Animal {
    private readonly name;
    private age;
    private colour?;
    constructor(name: string, age: number, colour?: string | undefined);
    abstract speak(): string;
    get getName(): string;
    get getAge(): number;
    set setAge(newAge: number);
}
export declare class Dog extends Animal {
    private breed;
    constructor(name: string, age: number, breed: string, colour?: string);
    fetch(): string;
    speak(): string;
}
interface Flyable {
    fly(): string;
}
export declare class Bird extends Animal implements Flyable {
    constructor(name: string, age: number, colour?: string);
    speak(): string;
    fly(): string;
}
export {};
//# sourceMappingURL=oop.d.ts.map