function solution(numbers, hand) {
  let handObj = {
    left: { x: 1, y: 4 },
    right: { x: 3, y: 4 },
  };

  let arr = [];
  let answer = [];
  let left = [1, 4, 7];
  let right = [3, 6, 9];
  for (let i = 0; i < 9; i++) {
    if (i <= 2) {
      arr.push({ x: i + 1, y: 1 });
    } else if (i <= 5) {
      arr.push({ x: Math.floor(i % 3) + 1, y: 2 });
    } else if (i > 5) {
      arr.push({ x: Math.floor(i % 3) + 1, y: 3 });
    }
  }
  arr.push({ x: 2, y: 4 });

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) numbers[i] = 10;
    if (left.includes(numbers[i])) {
      handObj.left = arr[numbers[i] - 1];
      answer.push("L");
    } else if (right.includes(numbers[i])) {
      handObj.right = arr[numbers[i] - 1];
      answer.push("R");
    } else {
      let leftNum =
        Math.abs(arr[numbers[i] - 1].x - handObj.left.x) +
        Math.abs(arr[numbers[i] - 1].y - handObj.left.y);
      let rightNum =
        Math.abs(arr[numbers[i] - 1].x - handObj.right.x) +
        Math.abs(arr[numbers[i] - 1].y - handObj.right.y);
      if (leftNum === rightNum) {
        handObj[hand] = arr[numbers[i] - 1];
        hand === "right" ? answer.push("R") : answer.push("L");
      } else if (leftNum > rightNum) {
        handObj.right = arr[numbers[i] - 1];
        answer.push("R");
      } else {
        handObj.left = arr[numbers[i] - 1];
        answer.push("L");
      }
    }
  }
  return answer.join("");
}
