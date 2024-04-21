//functions
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
//added default value hence no need of argument
function emaildetaile(name, age, number) {
    if (number === void 0) { number = "666"; }
    return name + age + number;
}
function emaildetails(name, age, number) {
    if (number === void 0) { number = "666"; }
    return 3;
    //return "Hello";
}
function myvoid(name, age, number) {
    if (number === void 0) { number = "666"; }
    //return 3;
    //return "Hello";
}
function handelError(errormsg) {
    throw new Error(errormsg);
    //return "Hello";
}
//arrow function 
var email = function (name, age, number) {
    if (number === void 0) { number = "666"; }
    return 3;
    //return "Hello";
};
var list2 = [2, "hello"];
list2.map(function (list) {
    return "HEllo ".concat(list);
});
emaildetails(4, 2);
emaildetails("hi", 2);
emaildetaile("4", 4, "33");
emaildetaile("4", 4);
addTwo(2);
getUpper("hello");
