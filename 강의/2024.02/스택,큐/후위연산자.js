const str = "352+*9-";
const subject = [];
for (let x of str) {
  if (x === "+") {
    let num = subject.pop();
    subject.push(subject.pop() + num);
  } else if (x === "-") {
    let num = subject.pop();
    subject.push(subject.pop() - num);
  } else if (x === "*") {
    let num = subject.pop();
    subject.push(subject.pop() * num);
  } else if (x === "/") {
    let num = subject.pop();
    subject.push(subject.pop() / num);
  } else {
    subject.push(Number(x));
  }
}
console.log(subject[0]);
