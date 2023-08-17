function Subject(item: { subject: string | string[] }) {
  if (typeof item.subject === "string") {
    return item.subject;
  } else if (typeof item.subject === "object") {
    return String(item.subject.slice(-1));
  } else {
    return undefined;
  }
}
console.log(Subject({ subject: "math" }));
console.log(Subject({ subject: ["science", "art", "korean"] }));
console.log(Subject({ hello: "hi" }));
