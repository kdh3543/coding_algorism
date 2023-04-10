function solution(s) {
  var arr = s.split("");
  var sum = 0;
  arr.map((value) => {
    if (sum < 0) {
      return false;
    }
    if (value === "(") {
      sum++;
    } else {
      sum--;
    }
  });
  return Boolean(sum === 0 && arr[0] === "(" && arr[arr.length - 1] === ")");
}
