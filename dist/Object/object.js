"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "chetan",
    sirname: "zagade",
    age: 34
};
function createUser({}) {
    return "name";
}
createUser({ name2: "hello", age2: 23 });
function createObj(user) {
    return { name: user.name, age: user.age };
}
let createUser2 = (user) => {
    return { name: "", sirname: "", age: 0 };
};
var newuser = {
    _id: "3344",
    name: "chetan",
    sirname: "zag",
    age: 45,
    //optional
    creditcard: 34
};
