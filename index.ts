function hello(name?: string): string {
  if (name) {
    return `안녕하세요 ${name}입니다.`;
  } else {
    return "이름이 없습니다.";
  }
}

hello();
