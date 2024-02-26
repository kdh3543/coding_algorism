const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
let stack = [];
let answer = [];
for (let x of str) {
  if (x === "(") {
    stack.push(x);
  } else if (x === ")") {
    stack.pop();
  }
  if (stack.length === 0 && x !== ")") {
    answer.push(x);
  }
}

console.log(answer.join(""));

// 다른 풀이

let stack1 = [];
for (let x of str) {
  if (x === ")") {
    let last = stack1.lastIndexOf("(");
    stack1.splice(last);
  } else {
    stack1.push(x);
  }
}

console.log(stack1.join(""));

// 강의 풀이
let answer2 = [];
let stack2 = [];
for (let x of str) {
  if (x === ")") {
    while (stack2.pop() !== "(");
  } else {
    stack2.push(x);
  }
}

console.log(stack2);
