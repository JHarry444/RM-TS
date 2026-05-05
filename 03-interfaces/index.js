"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface Trainer {
//     name: string;
//     age: number;
//     specialty?: string;
// }
const me = {
    name: "JH",
    age: 32,
    specialty: "Java",
    intro: function () {
        return `Hi, I'm ${this.name}, I'm ${this.age} years old and I specialize in ${this.specialty}.`;
    }
};
console.log(me);
const cameron = {
    name: "Cameron",
    age: 33,
    specialty: "JavaScript",
    intro: function () {
        return `Hi, I'm ${this.name}, I'm ${this.age} years old and I specialize in ${this.specialty}.`;
    }
};
console.log(cameron);
const trainers = [me, cameron];
//# sourceMappingURL=index.js.map