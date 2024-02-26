const str = "(()(()))(()";

let strArr = str.split("");
let tmp = [strArr.shift()];
for (let i = 0; i < strArr.length; i++) {
  let first = strArr.shift();
  if (tmp[tmp.length - 1] === ")") {
    return "NO";
  }
  if (tmp[tmp.length - 1] + first === "()") {
    tmp.pop();
  } else {
    tmp.push(first);
  }
}

tmp.length !== 0 && "NO";
