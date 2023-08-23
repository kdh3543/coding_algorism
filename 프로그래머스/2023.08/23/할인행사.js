function solution(want, number, discount) {
  let answer = 0;
  let map = new Map();
  for (let i = 0; i < want.length; i++) {
    map.set(want[i], number[i]);
  }

  while (discount.length !== 0) {
    let tmp = new Map(map);
    for (let i = 0; i < 10; i++) {
      if (!tmp.has(discount[i]) && discount.length !== 0) {
        discount.splice(0, i);
        break;
      } else {
        tmp.set(discount[i], tmp.get(discount[i]) - 1);
      }
    }
    [...tmp.values()].every((v) => v === 0) ? answer++ : null;
    discount.shift();
  }
  return answer;
}
