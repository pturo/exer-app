"use strict";
exports.__esModule = true;
var Test = /** @class */ (function () {
    function Test() {
        this.n1 = 32;
        this.n2 = 12;
        this.sum = this.n1 + this.n2;
    }
    Test.prototype.getSum = function () {
        console.log(this.sum);
    };
    return Test;
}());
exports.Test = Test;
var e = new Test();
e.getSum();
