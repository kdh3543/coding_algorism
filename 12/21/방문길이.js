function solution(dirs) {
  const splitDirs = dirs.split("");
  let location = [0, 0];
  let answerArr = [];
  let count = 0;
  for (let i = 0; i < splitDirs.length; i++) {
    if (
      location[0] >= 5 ||
      location[0] <= -5 ||
      location[1] >= 5 ||
      location[1] <= -5
    )
      continue;
    if (splitDirs[i] === "U") {
      location[1]++;
    } else if (splitDirs[i] === "D") {
      location[1]--;
    } else if (splitDirs[i] === "L") {
      location[0]--;
    } else if (splitDirs[i] === "R") {
      location[0]++;
    }
    count++;
    answerArr.push([...location]);
  }
  const strAnswer = answerArr.join("|").split("|");

  for (let i = 0; i < answerArr.length; i++) {
    for (let j = i + 1; j < answerArr.length; j++) {
      if (
        strAnswer[j] === strAnswer[i] &&
        (strAnswer[j + 1] === strAnswer[i + 1] ||
          strAnswer[j + 1] === strAnswer[i - 1])
      ) {
        count--;
      }
    }
  }
  return count;
}

// [0, 0];
// U, D, L, R;

const dirs = "LR";
const splitDirs = dirs.split("");
let location = [0, 0];
let answerArr = [[0, 0]];
let count = 0;
for (let i = 0; i < splitDirs.length; i++) {
  if (
    location[0] >= 5 ||
    location[0] <= -5 ||
    location[1] >= 5 ||
    location[1] <= -5
  )
    continue;
  if (splitDirs[i] === "U") {
    location[1]++;
  } else if (splitDirs[i] === "D") {
    location[1]--;
  } else if (splitDirs[i] === "L") {
    location[0]--;
  } else if (splitDirs[i] === "R") {
    location[0]++;
  }
  count++;
  answerArr.push([...location]);
}
const strAnswer = answerArr.join("|").split("|");
console.log(count);
console.log(strAnswer);
for (let i = 1; i < answerArr.length; i++) {
  for (let j = i + 1; j < answerArr.length - 1; j++) {
    if (
      (strAnswer[j] === strAnswer[i] &&
        strAnswer[j + 1] === strAnswer[i + 1]) ||
      (strAnswer[j + 1] === strAnswer[i] && strAnswer[j] === strAnswer[i + 1])
    ) {
      console.log(strAnswer[j]);
      count--;
    }
  }
}

console.log(count);

//
// console.log(answerArr);
// console.log(count);
