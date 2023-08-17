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
console.log(cutZero("0123"));
console.log(removeDash("1-2-3-4"));
