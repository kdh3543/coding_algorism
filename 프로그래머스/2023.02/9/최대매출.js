function solution(list, n) {
  let t = 0;
  let sum = 0;
  let fakeSum = sum;
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    count++;
    fakeSum += list[i];
    if (count === n) {
      if (fakeSum > sum) {
        sum = fakeSum;
      }
      fakeSum -= list[t++];
      count--;
    }
  }
  return sum;
}
