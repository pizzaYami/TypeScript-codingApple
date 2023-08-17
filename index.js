var cutZero = function (a) {
    if (a.slice(0, 1) === "0") {
        a = a.slice(1);
        return a;
    }
};
var removeDash = function (a) {
    for (var i = 0; i < a.length; i++) {
        a = a.replace("-", "");
    }
    return a;
};
var myFc = function (a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
};
console.log(myFc("010-1111-2222", cutZero, removeDash));
