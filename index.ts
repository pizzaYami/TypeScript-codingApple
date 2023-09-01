class User {
  private static x = 10;
  public static y = 20;

  static addOne(파라미터: number) {
    User.x += 파라미터;
  }

  static printX() {
    console.log(User.x);
  }
}
User.addOne(3);
User.addOne(10);
User.printX();
