export class Players {
    constructor(namee, age, country) {
        this.namee = namee;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.namee} from ${this.country} is playing`);
    }
}
