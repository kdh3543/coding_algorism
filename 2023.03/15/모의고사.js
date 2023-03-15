function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let arr = [one, two, three];
  let count = [0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    answers.map((val, j) => {
      if (val === arr[i][j % arr[i].length]) count[i]++;
    });
  }

  return count
    .map((value, index) => {
      if (value === Math.max(...count)) return index + 1;
    })
    .filter((value) => value !== undefined);
}
