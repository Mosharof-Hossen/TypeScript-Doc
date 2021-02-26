"use strict";
let age = 22;
let club = "Barcalonoa";
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName("Shihab", "sadik");
const multiply = (a, b) => a * b;
console.log(multiply(5, 6));
const num = [2, 5, 512, 6, 5, 8];
const friend = {
    name: "mosharof",
    age: 22
};
const messy = {
    name: "Messy",
    club: "FCB",
    salary: 45,
    wife: "Some one",
    isPlaying: true
};
const ronaldo = {
    name: "Ronaldo",
    club: "Real Madrid",
    salary: 43,
    isPlaying: true
};
function getBonus(player) {
    return player.salary * .1;
}
getBonus({ salary: 1000 });
// type in class 
class person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const sam = new person("fuck boy");
