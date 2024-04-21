"use strict";
class user {
    constructor(email) {
        this.age = 0; //it need to initalise
        this.city = "Delhi";
        this.state = "Delhi";
        this.email = email;
    }
    get giving() {
        return `hello ${this.state}`;
    }
    set taking(state) {
        this.state = state;
    }
}
const a = new user("a@gmail.com");
a.age = 4;
