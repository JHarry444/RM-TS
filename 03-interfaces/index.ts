type Trainer = {
    name: string;
    age: number;
    specialty?: string;
    intro: () => string;
}

// interface Trainer {
//     name: string;
//     age: number;
//     specialty?: string;
// }

const me: Trainer = {
    name: "JH",
    age: 32,
    specialty: "Java",
    intro: function() {
        return `Hi, I'm ${this.name}, I'm ${this.age} years old and I specialize in ${this.specialty}.`;
    }
};
console.log(me);

const cameron: Trainer = {
    name: "Cameron",
    age: 33,
    specialty: "JavaScript",
    intro: function() {
        return `Hi, I'm ${this.name}, I'm ${this.age} years old and I specialize in ${this.specialty}.`;
    }
};
console.log(cameron);
const trainers: Trainer[] = [me, cameron];