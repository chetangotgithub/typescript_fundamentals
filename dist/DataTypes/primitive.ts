//boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

//number
let isnum: number = 34;

//string
let isstring:string = "hello";

//void
function node (){
    return;
}

//undefined signal absent or uninitialized value: null and undefined
//With strictNullChecks off, values that might be null or undefined can still be accessed normally,
//With strictNullChecks on, when a value is null or undefined, you will need to test for 
//those values before using methods or properties on that value.
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}