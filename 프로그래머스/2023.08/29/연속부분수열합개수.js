function solution(elements) {
  let doubleElements = elements.concat(elements);
  let answer = [];
  for (let i = 0; i < doubleElements.length; i++) {
    for (let j = i; j < doubleElements.length; j++) {
      let tmp = doubleElements.slice(i, j + 1);
      if (tmp.length <= elements.length)
        answer.push(tmp.reduce((a, b) => a + b, 0));
    }
  }
  return [...new Set(answer)].length;
}
