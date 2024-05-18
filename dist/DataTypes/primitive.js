//boolean
var isTrue = true;
var isFalse = false;
//number
var isnum = 34;
//string
var isstring = "hello";
//void
function node() {
    return;
}
//undefined signal absent or uninitialized value: null and undefined
//With strictNullChecks off, values that might be null or undefined can still be accessed normally,
//With strictNullChecks on, when a value is null or undefined, you will need to test for 
//those values before using methods or properties on that value.
function doSomething(x) {
    if (x === null) {
        // do nothing
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
