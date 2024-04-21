//functions
function addTwo(num:number){
    return num +2;
}

function getUpper(val:string){
    return val.toUpperCase()
}
//added default value hence no need of argument
function emaildetaile (name:string, age:number , number:string = "666"){
    return name + age + number;
}

function emaildetails (name:(string | number), age:number , number:string = "666") : number{
    return 3;
    //return "Hello";
}

function myvoid (name:string, age:number , number:string = "666") : void{
    //return 3;
    //return "Hello";
}

function handelError (errormsg: string) : never{
    throw new Error(errormsg);
    //return "Hello";
}

//arrow function 
const email = (name:string, age:number , number:string = "666") : number =>{
    return 3;
    //return "Hello";
}

const list2 = [2,"hello"];
list2.map(list =>{
    return `HEllo ${list}`;
})

emaildetails(4,2);
emaildetails("hi",2);
emaildetaile("4",4,"33");
emaildetaile("4",4);
addTwo(2);
getUpper("hello")
