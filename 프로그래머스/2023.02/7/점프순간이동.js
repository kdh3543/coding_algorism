function solution(n) {
  var ans = 0;
  let num = 1;
  while (true) {
    if (num > n) {
      n = n - num / 2;
      ans++;
      num = 1;
    } else if (num < n) {
      num = num * 2;
    } else {
      ans++;
      break;
    }
  }
  return ans;
}
