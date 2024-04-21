"use strict";
const myarray = [];
const myarray1 = [];
myarray.push("spider");
myarray1.push(3);
const allUser = [];
allUser.push({ name: "chetan", age: 3 });
//Union types
let score = 33;
score = "33";
let usercredit = { name: "c", age: 4 };
function details(name) {
    if (typeof name == "string") {
        name.toLowerCase();
    }
    //name.toUppercase()
}
let data = [];
data = 33;
data = ["h", "e"];
//value strict
let seatallotment;
//seatallotment = "middle";
//tuples
//only three allowed
const user1 = ["hc", 4, true];
user1.push(45); //why
//enums to restrict user choices
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
const hcseat = SeatChoice.AISLE;
