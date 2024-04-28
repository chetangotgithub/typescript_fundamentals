var UFind = /** @class */ (function () {
    function UFind(a) {
        this.arr = [];
        this.a = a;
        for (var i = 0; i < a; i++) {
            this.arr[i] = i;
        }
    }
    UFind.prototype.find = function (num1, num2) {
        for (var i = 0; i < this.a; i++) {
            if (this.arr[num1 - 1] == this.arr[num2 - 1]) {
                return true;
            }
        }
        return false;
    };
    UFind.prototype.union = function (num1, num2) {
        var id1 = this.arr[num1 - 1];
        var id2 = this.arr[num2 - 1];
        if (id1 == id2) {
            return;
        }
        for (var i = 0; i < this.a; i++) {
            if (this.arr[i] == id1) {
                this.arr[i] = id2;
            }
        }
        //this.arr[num1 - 1] = id2;
    };
    return UFind;
}());
var Unionfind = new UFind(5);
Unionfind.union(3, 4);
console.log("first union " + Unionfind.arr);
Unionfind.union(4, 5);
console.log("second union " + Unionfind.arr);
Unionfind.union(1, 5);
console.log("third union " + Unionfind.arr);
//console.log(unionfind.find(3 , 4));
//[LOG]: "first union 0,1,3,3,4" 
//[LOG]: "second union 0,1,4,4,4" 
//[LOG]: "third union 4,1,4,4,4"
