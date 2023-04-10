function solution(operations) {
  let arr = [];

  operations.map((val) => {
    if (val.includes("I")) {
      arr.push(parseInt(val.split("I ")[1]));
      arr = arr.sort((a, b) => a - b);
    } else if (val.includes("D 1")) {
      arr.pop();
    } else {
      arr.shift();
    }
  });
  return arr.length === 0 ? [0, 0] : [arr.pop(), arr.shift()];
}
