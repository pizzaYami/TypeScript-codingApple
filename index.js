function cleaning(arr) {
    var result = [];
    arr.map(function (a) {
        if (typeof a === "string") {
            result.push(Number(a));
        }
        else {
            result.push(a);
        }
    });
    return result;
}
console.log(cleaning(["122", 123, "3"]));
