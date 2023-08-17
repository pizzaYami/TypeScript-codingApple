function marry(월급: number, 집: boolean, 매력: string): string {
  let point = 0;
  point += 월급;
  if (집 === true) {
    point += 500;
  }
  if (매력 === "상") {
    point += 100;
  }
  if (point >= 600) {
    return "결혼가능";
  }
}
console.log(marry(300, false, "중"));
