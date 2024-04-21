const myarray:string[] = [];
const myarray1:Array<number> = [];


myarray.push("spider");
myarray1.push(3);

type User = {
    name: string,
    age: number
}

const allUser: User[] = [];
allUser.push({name: "chetan", age:3});

//Union types
let score: number | string = 33;
score = "33";


type user1 = {
    name:string,
    age:number
}
type credit = {
    id: string
}

let usercredit: user1 | credit = {name:"c", age:4};


function details (name: number | string){
    if(typeof name == "string"){
        name.toLowerCase()
    }
    //name.toUppercase()
}

let data :number | string[] = [];
data =33;
data = ["h","e"];

//value strict
let seatallotment: "high" | "low"
//seatallotment = "middle";

//tuples
//only three allowed
const user1:[string,number,boolean] = ["hc",4,true];
user1.push(45);//why

//enums to restrict user choices
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}
const hcseat = SeatChoice.AISLE;