function cleaning(arr: (string | number)[]): number[] {
  let result: number[] = [];
  arr.map((a) => {
    if (typeof a === "string") {
      result.push(Number(a));
    } else {
      result.push(a);
    }
  });
  return result;
}
console.log(cleaning(["122", 123, "3"]));
