function sayHi(x) {
    if (typeof x === "string") {
        console.log(x.length);
    }
    else if (typeof x === "number") {
        console.log(String(x).length);
    }
}
sayHi("123");
sayHi(123);
