export class Players {

    constructor(
        private namee : string,
        public age : number,
        readonly country : string,
    ){}
    play(){
        console.log(`${this.namee} from ${this.country} is playing`)
    }
}