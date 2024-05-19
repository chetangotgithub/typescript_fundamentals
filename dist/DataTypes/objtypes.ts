//interface
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return 'Hello ' + person.name;
}

//class
//Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
//Constructors can’t have return type annotations - the class instance type is always what’s returned
class abd {
  x:number
  readonly y : number = 9
  constructor (res : number){
    this.x = res
  }
}
class Derived extends abd {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    super(5);
    console.log(this.x);
//'super' must be called before accessing 'this' in the constructor of a derived class.
    
  }
}