function MathFloor(...a: number[]) {
  return a.sort().slice(-1);
}

function 함수1({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}): void {
  console.log(user, comment, admin);
}

함수1({ user: "kim", comment: [3, 5, 4], admin: false });

function 함수2([a, b, c]: [a: number, b: string, c: boolean]): void {
  console.log(a, b, c);
}

함수2([40, "wine", false]);
