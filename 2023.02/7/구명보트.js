function solution(people, limit) {
  let count = 0;
  let sum = limit;
  people = people.sort((a, b) => b - a);
  let i = 0;
  let j = people.length - 1;
  while (true) {
    if (sum - people[i] >= 0) {
      sum = sum - people[i];
      i++;
    } else if (sum - people[i - 1] < 0 && sum - people[j] >= 0) {
      sum = sum - people[j];
      j--;
    } else {
      count++;
      sum = limit;
    }
    if (i > j) {
      count++;
      break;
    }
  }

  return count;
}
