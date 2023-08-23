function solution(s) {
  let arr = s
    .split(/[{}]/g)
    .filter((v) => v && v !== ",")
    .map((v) => v.split(",").map((t) => parseInt(t)))
    .sort((a, b) => a.length - b.length);

  let answer = [...arr[0]];
  for (let i = 1; i < arr.length; i++) {
    answer.push(...arr[i].filter((v) => !arr[i - 1].includes(v)));
  }
  return answer;
}

// 다른 답 ( reduce 활용 )

let answer = arr.reduce(
  (acc, cur) => [...acc, ...cur.filter((v) => !acc.includes(v))],
  []
);
