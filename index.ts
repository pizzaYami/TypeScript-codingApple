type Filter = (string) => number;
type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

let cutZero = function (a) {
  if (a.slice(0, 1) === "0") {
    a = a.slice(1);
    return a;
  }
};

let removeDash = function (a) {
  for (let i = 0; i < a.length; i++) {
    a = a.replace("-", "");
  }
  return a;
};

let myFc = function (a: string, func1: 함수타입1, func2: 함수타입2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
};

console.log(myFc("010-1111-2222", cutZero, removeDash));
