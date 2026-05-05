const name: string = "Ash Ketchum";
const age: number = 10;
const isTrainer: boolean = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Trainer:", isTrainer);

let dayOfWeek = "Monday"; // TypeScript infers this as a string

dayOfWeek = 12; // Error: Type 'number' is not assignable to type 'string'


let val: any; // 'any' is basically default JS

// any allows us to assign any type of value to the variable

let something: unknown; // 'unknown' is a safer alternative to 'any'

// We can assign any value to 'unknown', but we cannot use it without type checking

something = "Hello";

something.toUpperCase(); // Error: Object is of type 'unknown'

if (typeof something === "string") {
    console.log((something as string).toUpperCase()); // Now it's safe to use string methods
}
something = 42;
something = true;

const names: string[] = ["Ash", "Misty", "Brock"]; // TypeScript infers this as string[] (array of strings)

names.push("Pikachu");

const numbers: Array<number> = [1, 2, 3, 4, 5]; // Another way to define an array of numbers


const me: [string, number, string] = ["JH", 32, "Java"]; // A tuple with a string and a number and another string   `

console.log(me);

const me2: { name: string; age: number; specialism?: string } = {
    name: "JH",
    age: 32,
    specialism: "Java"
}

console.log(me2);


function greet(name: string): string {
    return `Hello, ${name}!`;
}

function add(a: number, b: number): number {
    return a + b;
}
// The 'void' type is used for functions that do not return a value
function logMessage(message: string): void {
    console.log("Log:", message);
}

enum Day {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}

const today: Day = Day.Tuesday;