type Profile = {
  name: string;
  age: number;
  plusOne: (number) => number;
  changeName: () => void;
};

let 회원정보: Profile = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName() {
    console.log("안녕");
  },
};
console.log(회원정보.plusOne(1));
console.log(회원정보.changeName());
