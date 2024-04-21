class user{
    email:string
    age:number = 0//it need to initalise
    readonly city:string = "Delhi"
    private state:string = "Delhi"
    constructor(email:string){
        this.email = email;
    }
    get giving():string{
        return `hello ${this.state}`
    }
    set taking(state: string){
        this.state =state;
    }
}

const a = new user("a@gmail.com");
a.age = 4