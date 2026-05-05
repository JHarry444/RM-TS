"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Ash Ketchum";
const age = 10;
const isTrainer = true;
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Trainer:", isTrainer);
let dayOfWeek = "Monday"; // TypeScript infers this as a string
dayOfWeek = 12; // Error: Type 'number' is not assignable to type 'string'
let val; // 'any' is basically default JS
// any allows us to assign any type of value to the variable
let something; // 'unknown' is a safer alternative to 'any'
// We can assign any value to 'unknown', but we cannot use it without type checking
something = "Hello";
something.toUpperCase(); // Error: Object is of type 'unknown'
if (typeof something === "string") {
    console.log(something.toUpperCase()); // Now it's safe to use string methods
}
something = 42;
something = true;
const names = ["Ash", "Misty", "Brock"]; // TypeScript infers this as string[] (array of strings)
names.push("Pikachu");
const numbers = [1, 2, 3, 4, 5]; // Another way to define an array of numbers
const me = ["JH", 32, "Java"]; // A tuple with a string and a number and another string   `
console.log(me);
const me2 = {
    name: "JH",
    age: 32,
    specialism: "Java"
};
console.log(me2);
function greet(name) {
    return `Hello, ${name}!`;
}
function add(a, b) {
    return a + b;
}
// The 'void' type is used for functions that do not return a value
function logMessage(message) {
    console.log("Log:", message);
}
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
const today = Day.Tuesday;
//# sourceMappingURL=index.js.map