// 1. static property vs instance property
// 以dummmyA2類別來說，constructor, d, e被ts歸類在static property, b, c被歸類在實體屬性
// 參考1： https://stackoverflow.com/questions/58399613/what-is-exactly-the-static-side-and-the-instance-side-in-typescript
// 參考2： https://stackoverflow.com/questions/13407036/how-does-interfaces-with-construct-signatures-work
var dummmyA2 = /** @class */ (function () {
    function dummmyA2(arg) {
        this.b = arg;
    }
    dummmyA2.prototype.c = function () { };
    dummmyA2.d = 2;
    dummmyA2.e = 3;
    return dummmyA2;
}());
var dummy123 = /** @class */ (function () {
    function dummyA1(arg) {
        this.property1 = arg;
    }
    return dummyA1;
}());
var temp123 = new dummy123(123);
