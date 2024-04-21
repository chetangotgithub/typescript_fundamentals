const User = {
    name: "chetan",
    sirname: "zagade",
    age: 34
}

function createUser({}): string{
    return "name";
}
createUser({name2:"hello",age2:23});

function createObj(user:{name:string,age:number}) :{name:string, age:number}{
    return {name: user.name ,age:user.age};
}


type UserDetails = {
    name: string,
    sirname: string,
    age: number
}

let createUser2 = (user: UserDetails) : UserDetails=>{
    return {name: "", sirname: "", age:0}
}

//read only
type hidedetails = {
    readonly _id:string,
    name: string,
    sirname: string,
    age: number
    creditcard?: number
}
var newuser: hidedetails = {
    _id: "3344", 
    name : "chetan",
    sirname:"zag",
    age:45,
    //optional
    creditcard:34
    
};
//cannotcahnge
//newuser._id = "34";

//type merge
type cardNumber = {
    cardnum: number
}
type cardDetails = hidedetails & cardNumber & {
    cvv: number
}



export {}