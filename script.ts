// ********* variable ************

// let playerName 
//  playerName = "tamim"

// console.log(playerName)

// playerName = 35

// console.log(playerName)

// ******************function ***********

// function add (a:number,b:number){
//     return a+b;
// }

// console.log(add(10,10))

// **********************************array

// let namee = ["anik","mosharof","hossen"]

// namee.push("hasan")
// console.log(namee)

// let mixed = ["mosharof",3,true,{}]

// mixed.push({
//     hobby:"cricket"
// })

// console.log(mixed)


// let a:(string | number)[] = []

// a.push("mosharof",15,true)

// // object  

// let c:{
//     namee:string,
//     age:number
//     adult :boolean
// }



// c = {
//     namee : "hossssen",
//     age : 22,
//     adult :false
// }
// console.log(c)
// const myFunc = (a:string,b:string , c:number = 15)=>{
//     return a+b+c;

// }
// let result =  myFunc("A","B",20 )
// console.log(result)

// ************************type Aliases ************
// type stringOrNum = string | number ;
// type userType = {name:string , age :number}
// const userDetails = (
//     id : stringOrNum,
//     user : userType
// )=>{
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`)
// }

// userDetails(15,{"Moshaorf",22})

// ***************************function Signature*************

// let calculation : ( a :number , b:number ,z:string) => number

// calculation = (a:number,b:number,c:string) => {
//     if (c === "add"){
//         return a + b ;
//     }else{
//         return a-b;
//     }
// }

// // console.log(calculation(5,6,"add"))
// import {Players} from "./classes/Player.js"

// let res = new Players("Mosharof",22,"bd")
// console.log(res.country)






// ****************************** Interfaces ************

interface RactectangleOption {
    width : number;
    length : number;
}
function drawRectangle(option:RactectangleOption){
    let width = option.width;
    let length = option.length;
}

let threeDoption = {
    width:25,
    length:25,
    height : 10 
}
drawRectangle(threeDoption)