var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greet(person) {
    return 'Hello ' + person.name;
}
//class
//Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
//Constructors can’t have return type annotations - the class instance type is always what’s returned
var abd = /** @class */ (function () {
    function abd(res) {
        this.y = 9;
        this.x = res;
    }
    return abd;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        // Prints a wrong value in ES5; throws exception in ES6
        var _this = _super.call(this, 5) || this;
        console.log(_this.x);
        return _this;
        //'super' must be called before accessing 'this' in the constructor of a derived class.
    }
    return Derived;
}(abd));
