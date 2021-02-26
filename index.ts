let age:number = 22
let club:string = "Barcalonoa"

function add(num1:number, num2:number){
    return num1 + num2;
}

add(5 , 10)

function fullName( firstName:string ,lastName:string ):string{
    return firstName + " " + lastName ;
}

const   user = fullName("Shihab" , "sadik")

const multiply = (a:number,b:number) => a*b ;
console.log(multiply(5,6))


const num:number[] = [2,5,512,6,5,8]


const friend:{name:string , age:number} = {
    name : "mosharof",
    age : 22
}

// typescript interface and complex parameter

interface Player {
    club : string,
    name : string,
    salary :number,
    wife? : string,
    isPlaying : boolean
}

const messy:Player = {
    name : "Messy",
    club : "FCB",
    salary : 45,
    wife : "Some one",
    isPlaying : true
}

const ronaldo:Player ={
    name : "Ronaldo",
    club : "Real Madrid",
    salary : 43,
    isPlaying : true
}

function getBonus (player:{salary:number}){
    return player.salary *.1
}

getBonus ({salary:1000})

// type in class 

class person{
    name :string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}

const sam = new person("fuck boy")