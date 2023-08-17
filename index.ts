type filter = (a: string) => number;

let cutZero: filter = function (a) {
  if (a.slice(0, 1) === "0") {
    a = a.slice(1);
    return a;
  }
};

let removeDash: filter = function (a) {
  for (let i = 0; i < a.length; i++) {
    a = a.replace("-", "");
  }
  return a;
};
console.log(cutZero("0123"));

console.log(removeDash("1-2-3-4"));
