function solution(survey, choices) {
  let type = {
    RT: 0,
    CF: 0,
    JM: 0,
    AN: 0,
  };

  let arr = [];

  for (let i = 0; i < survey.length; i++) {
    if (type[survey[i]] === undefined) {
      arr.push(survey[i].split("").reverse().join(""));
      choices[i] = 8 - choices[i];
    } else {
      arr.push(survey[i]);
    }
  }

  arr.map((v, i) => (type[v] += choices[i] - 4));
  let typeArr = Object.entries(type).map((v) => v);
  return typeArr
    .map((v) => (v[1] <= 0 ? v[0].split("")[0] : v[0].split("")[1]))
    .join("");
}
