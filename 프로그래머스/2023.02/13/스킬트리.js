function solution(skill, skill_trees) {
  let answer = skill_trees.length;
  skill_trees.map((value) => {
    let splitValue = value.split("");
    let skillSplit = skill.split("");
    for (let i = 0; i < splitValue.length; i++) {
      if (skill.includes(splitValue[i])) {
        if (skillSplit[0] === splitValue[i]) {
          skillSplit.shift();
          continue;
        } else {
          answer--;
          break;
        }
      }
    }
  });
  return answer;
}
