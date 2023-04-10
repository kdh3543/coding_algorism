function solution(priorities, location) {
  let prioritiesMix = [];

  priorities.map((val, index) => {
    if (index === location) {
      prioritiesMix.push([val, index]);
    } else {
      prioritiesMix.push([val, "z"]);
    }
  });
  let arr = [];
  while (true) {
    let num = prioritiesMix.shift();
    if (prioritiesMix.some((val) => val[0] > num[0])) {
      prioritiesMix.push(num);
    } else {
      arr.push(num);
    }
    if (prioritiesMix.length === 0) break;
  }

  return arr.findIndex((val) => val[1] !== "z") + 1;
}
